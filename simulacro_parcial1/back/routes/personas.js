
import express from 'express'
const router = express.Router();

import { servicio } from '../personas.service.js'



router.get("/personas", async(request, response) => {
    const todas = await servicio.obtener_todas()
    response.send(todas)
}) 

router.get("/personas/:doc", async (request, response) => {
    const doc = parseInt(request.params.doc)
    if (!isNaN(doc)) {
        const personaEncontrada = await servicio.obtener_por_documento(doc)
        if (personaEncontrada) 
            response.status(200).send(personaEncontrada)
        else
            response.sendStatus(404)
    }
})

router.delete("/personas/:doc", async (request, response) => {
    const doc = parseInt(request.params.doc)
    console.log(request.params)
    if (!isNaN(doc)) {
        const personaEncontrada = await servicio.borrar(doc)
        if (personaEncontrada) 
            response.status(200).send(personaEncontrada)
        else
            response.sendStatus(404)
    }
});

export default router;