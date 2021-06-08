function crearConfirmadorDeTurno(pdferRecibido, mailerRecibido, daoSolicitude, molder){
    
    const pdfer = pdferRecibido
    const mailer = mailerRecibido
    const daoSolicitudes = daoSolicitude
    const molderDatosPdf = molder
        
    return {
            confirmarPaciente: async (parametros) => { 
                const objectParametro = JSON.parse(JSON.stringify(parametros))
                const dni = objectParametro.dni
                const turno = objectParametro.turno

              await daoSolicitudes.cambiarEstado(dni, "Autorizado")

                //agrego los datos del turno
                await daoSolicitudes.establecerTurno(turno)

                const paciente = await daoSolicitudes.getPaciente(dni)
                //hago el esquema de datos para el pdf
                const datos = molderDatosPdf.crearMolderParaPdf(paciente, turno)

                //le mando al pdfer el titulo del pdf, el nombre del archivo, y los datos
                const nombrePdf = paciente.nombre + "_"+ paciente.apellido
                
                //el titulo del pdf no lo envio por parametro porque el titulo de la confirmacion va a ser estatico
                pdfer.pasarAPdf("Datos de la vacunacion:", nombrePdf, datos)
                const nombreArchivo = nombrePdf + ".pdf"
                
                //mando por parametro lo que necesita el mailer
               await mailer.sendEmailWithAttachment(await daoSolicitudes.getMail(dni), nombreArchivo, '../Pdfs/' + nombreArchivo);

            }  
        }
}
export { crearConfirmadorDeTurno }