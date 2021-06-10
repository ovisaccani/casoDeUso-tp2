function crearMolderTurno(datos){
    /*return{
        crearTurno : (datos)=>{
            const turno = {
                 fecha = datos.fecha,
                 lugar = datos.lugar,
                 tipoVacuna = datos.tipoVacuna
            }
            return turno
        }
    }*/
    const turno = {
        fecha : datos.fecha,
        lugar : datos.lugar,
        tipoVacuna : datos.tipoVacuna
   }
   return turno
}
export { crearMolderTurno }