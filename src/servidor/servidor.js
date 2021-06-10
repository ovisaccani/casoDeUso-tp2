import express from 'express'
import {crearCu} from '../CasoDeUso/confirmadorFactory.js'
import {crearMolderTurno} from '../CasoDeUso/MolderTurno.js'
const app = express ()

app.use(express.json())

app.patch('/solicitudes', async (req, res)=> {
    const casoDeUso = await crearCu()

    try {
        const turno = crearMolderTurno(req.body)
        await casoDeUso.confirmarPaciente(req.body.id, turno) 
        res.json(200)
      } catch (error) {
        //return res.status(500).json({ message: error.message })
        throw error.response
      }
})

app.listen(3000, () =>{
    console.log("servidor conectado")
})