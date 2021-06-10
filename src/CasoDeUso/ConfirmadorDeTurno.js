function crearConfirmadorDeTurno(pdfer, mailer, daoSolicitudes, molderDatosPdf){    
    return {
            confirmarPaciente: async (id, turno) => { 
                /*const objectParametro = JSON.parse(JSON.stringify(parametros))
                const dni = objectParametro.dni
                const turno = objectParametro.turno*/
                const solicitud = await daoSolicitudes.get(id)
  
                await solicitud.confirmarTurno()
                
                //agrego los datos del turno
                await solicitud.establecerTurno(turno)
                const paciente = await solicitud.getPaciente()
                //hago el esquema de datos para el pdf
                const datos = molderDatosPdf.crearMolderParaPdf(paciente, turno)

                //le mando al pdfer el titulo del pdf, el nombre del archivo, y los datos
                const nombrePdf = paciente.nombre + "_"+ paciente.apellido
                
                //el titulo del pdf no lo envio por parametro porque el titulo de la confirmacion va a ser estatico
                pdfer.pasarAPdf("Datos de la vacunacion:", nombrePdf, datos)
                const nombreArchivo = nombrePdf + ".pdf"
                //mando por parametro lo que necesita el mailer
                
                const mail = await solicitud.getMail()
                await mailer.sendEmailWithAttachment(mail, nombreArchivo, '../Pdfs/' + nombreArchivo);

            }  
        }
}
export { crearConfirmadorDeTurno }