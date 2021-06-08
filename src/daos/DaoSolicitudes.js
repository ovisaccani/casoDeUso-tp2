function CrearDaoSolicitudes() {  
    //este paciente es a modo de ejemplo para retornar algo y que funcione el test, al igual que los metodos
    const solicitudEjemplo = 
    {paciente : 
        {nombre: "Ovidio", apellido: "Saccani", mail: "osaccani@gmail.com", antecedentes: "-", edad: 24, dni: 40140084}, 
    turno : 
        {fecha: null, lugar: null, tipoVacuna: null},
    estado : "PENDIENTE"}
    
    return{
        cambiarEstado: async (dni, estadoNuevo) => {
        console.log("cambiando estado")
        solicitudEjemplo.estado=estadoNuevo
        },
        establecerTurno: async (dni, turno) => {
            console.log("haciendo el turno")
            solicitudEjemplo.turno=turno
            },  
        getPaciente : async (dni) =>{
            return solicitudEjemplo.paciente
        },
        getMail : async (dni) =>{
            return solicitudEjemplo.paciente.mail
        } 
    }   
}
export {CrearDaoSolicitudes}