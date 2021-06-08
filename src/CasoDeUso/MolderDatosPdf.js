function CrearMolder(){ 
    return {
            crearMolderParaPdf(paciente, turno){
                const datos = [
                    "Nombre : " + paciente.nombre,
                    "Apellido : " + paciente.apellido,
                    "Dni : " + paciente.dni,
                    "Fecha : " + turno.fecha,
                    "Lugar : " + turno.lugar,
                    "Tipo Vacuna: " + turno.tipoVacuna]
                return datos
            }
    }
}
export { CrearMolder }