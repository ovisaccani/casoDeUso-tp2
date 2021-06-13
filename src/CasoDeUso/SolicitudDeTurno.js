import { crearPaciente } from "./Paciente.js";
import { crearTurno } from "./Turno.js";

const estadosDeSolicitud = [
  "PENDIENTE",
  "CONFIRMADO",
  "COMPLETADOPD",
  "COMPLETADOSD",
];

let id= 0;

async function crearSolicitudDeTurno(datos) {
  const solicitud = {};
  
    if (!datos.paciente) {
      throw new Error("falta paciente");
    } else {
      solicitud.paciente = crearPaciente(datos.paciente);
    }

  if (!datos.turno) {
    solicitud.turno = null;
  } else {
    solicitud.turno = crearTurno(datos.turno);
  }

  if (!datos.estado) {
    solicitud.estado = "PENDIENTE";
  } else {
    const esEstadoValido = estadosDeSolicitud.some((e) => {
      e === datos.estado;
    });
    if (!esEstadoValido) {
      throw new Error("estado de solicitud invalido");
    }
    solicitud.estado = datos.estado;
  }

  solicitud.id = id++;

  solicitud.confirmarTurno= async () =>{
    solicitud.estado = "CONFIRMADO"
  },
  solicitud.establecerTurno= async (turno) =>{
    solicitud.turno = turno
  },
  solicitud.getPaciente = async () => {
    return solicitud.paciente
  },
  solicitud.getEmail= async () => {
    return solicitud.paciente.email
  }

  return solicitud; 
}


export { crearSolicitudDeTurno };