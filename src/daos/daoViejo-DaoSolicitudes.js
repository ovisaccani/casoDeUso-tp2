function CrearDaoSolicitudes() {  
    //este paciente es a modo de ejemplo para retornar algo y que funcione el test, al igual que los metodos
    const solicitudEjemplo = 
        {
            paciente : 
                {nombre: "Ovidio", apellido: "Saccani", mail: "osaccani@gmail.com", antecedentes: "-", edad: 24, dni: 40140084}, 
            turno : 
                {fecha: null, lugar: null, tipoVacuna: null},
            estado : 
                "PENDIENTE",
            establecerTurno: async (turno) =>{
                console.log("haciendo el turno")
                solicitudEjemplo.turno=turno
            },
            getMail : async () =>{
                return solicitudEjemplo.paciente.mail
            },
            confirmarTurno: async () => {
                console.log("confirmando turno")
                solicitudEjemplo.estado = "CONFIRMADO"
                }, 
            getPaciente: async () => {
                return solicitudEjemplo.paciente
            },
        }
    
    return{
        get : async (id) =>{
            return solicitudEjemplo
        },

    }   
}
export {CrearDaoSolicitudes}