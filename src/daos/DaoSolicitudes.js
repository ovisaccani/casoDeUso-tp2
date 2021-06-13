function crearDaoSolicitudesDeTurno() {
  const solicitudEjemplo = 
{
    id: 0,
    paciente : 
        {nombre: "Ovidio", apellido: "Saccani", email: "osaccani@gmail.com", antecedentes: "-", edad: 24, dni: 40140084, foto: 's'}, 
    turno : 
        {fecha: null, lugarVac: "test", tipoVacuna: "sinopharm"},
    estado : 
        "",
}
  const solicitudes = [solicitudEjemplo];
  

  return {
    add: (solicitud) => {
      const existeSolicitud = solicitudes.some((s) => {
        return s.id === solicitud.id;
      });
      const existePaciente = solicitudes.some((s) => {
        return s.paciente.dni === solicitud.paciente.dni;
      });
      if (!(existeSolicitud || existePaciente)) {
        solicitudes.push(solicitud);
        return true;
      } else {
        return false;
      }
    },
    getAllSolicitudes: () => {
      return solicitudes;
    },
    getAllByKey: (key) => {
      const solicitudesFiltradas = [];
      solicitudes.map((s) => solicitudesFiltradas.push(s[key]));
      return solicitudesFiltradas;
    },

    getById: async (id) => {
      return solicitudes.filter(s => s.id == id)[0]
    },
    save: async (solicitud) => {
      const existeSolicitud = solicitudes.some((s) => {
        return s.id === solicitud.id;
      });
      if (!existeSolicitud) {
        solicitudes.push(solicitud);
      } else {
        const idx = solicitudes.findIndex(s => s.id === solicitud.id)
        solicitudes[idx] = solicitud
      }
    },
  };
}

export { crearDaoSolicitudesDeTurno };
