/*import {crearSolicitudDeTurno} from './CasoDeUso/SolicitudDeTurno.js'

const solicitudEjemplo = 
{
    paciente : 
        {nombre: "Ovidio", apellido: "Saccani", email: "osaccani@gmail.com", antecedentes: "-", edad: 24, dni: 40140084, foto: 's'}, 
    turno : 
        {fecha: null, lugarVac: "test", tipoVacuna: "sinopharm"},
    estado : 
        "",
}
const solicitud = crearSolicitudDeTurno(solicitudEjemplo)
console.log(solicitud)*/

import {crearCu} from './CasoDeUso/confirmadorFactory.js'
import {crearMolderTurno} from './CasoDeUso/MolderTurno.js'

const casoDeUso = await crearCu()
const parametro = {
    "id" : "1",
    "fecha" : "", 
    "lugar" : "Sede centro", 
    "tipoVacuna" : "sputnik-v"
}
const turno = crearMolderTurno(parametro)
await casoDeUso.confirmarPaciente(parametro.id, turno) 




