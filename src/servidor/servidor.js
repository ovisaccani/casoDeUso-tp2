import express from 'express'
import {crearCu} from '../CasoDeUso/confirmadorFactory.js'
const app = express ()

app.use(express.json())

app.patch('/solicitudes', async (req, res)=> {
    const casoDeUso = crearCu()
    await casoDeUso.confirmarPaciente(req.body) 
    res.json(200)
})

app.listen(3000, () =>{
    console.log("servidor conectado")
})