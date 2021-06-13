import {crearSolicitudDeTurno} from '../CasoDeUso/SolicitudDeTurno.js'
function crearConfirmadorDeTurno(pdfer, mailer, daoSolicitudes, molderDatosPdf){    
    return {
            confirmarPaciente: async (id, turno) => { 
                const solicDTO = await daoSolicitudes.getById(id)
                const solicitud = await crearSolicitudDeTurno(solicDTO)
  
                await solicitud.confirmarTurno()
                
                //agrego los datos del turno
                await solicitud.establecerTurno(turno)
                const paciente = await solicitud.getPaciente()

                daoSolicitudes.save(solicitud)
                //hago el esquema de datos para el pdf
                const datos = molderDatosPdf.crearMolderParaPdf(paciente, turno)

                //le mando al pdfer el titulo del pdf, el nombre del archivo, y los datos
                const nombrePdf = paciente.nombre + "_"+ paciente.apellido
                
                //el titulo del pdf no lo envio por parametro porque el titulo de la confirmacion va a ser estatico
                pdfer.pasarAPdf("Datos de la vacunacion:", nombrePdf, datos)
                const nombreArchivo = nombrePdf + ".pdf"
                //mando por parametro lo que necesita el mailer
                
                const email = await solicitud.getEmail()
                await mailer.sendEmailWithAttachment(email, nombreArchivo, '../../Pdfs/' + nombreArchivo);

            }  
        }
}
export { crearConfirmadorDeTurno }