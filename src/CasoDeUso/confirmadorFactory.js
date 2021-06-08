import {crearConfirmadorDeTurno} from '../CasoDeUso/ConfirmadorDeTurno.js'
import {crearEnviadorDeMail} from '../mailer/EnviadorMailTurnos.js'
import {crearConversorPdf} from '..//pdfer/ConvertirAPDF.js'
import {CrearDaoSolicitudes} from '../daos/DaoSolicitudes.js'
import {CrearMolder} from '../CasoDeUso/MolderDatosPdf.js'

 //inicializo lo necesario
 const enviadorDeMail = await crearEnviadorDeMail('ort.proy.integrador.21@gmail.com', 'Ort123456');
 const conversorPdf = crearConversorPdf('../Pdfs') 
 const DaoSolicitudes = CrearDaoSolicitudes()
 const molder = CrearMolder()
 //este es el dni que se le mandaria por parametro para cambiar el estado


 //inicializo mi CU
 function crearCu(){
    const confirmadorDeTurno = crearConfirmadorDeTurno(
        conversorPdf, 
        enviadorDeMail,
        DaoSolicitudes,
        molder
        )
        return confirmadorDeTurno
 }

 export {crearCu}