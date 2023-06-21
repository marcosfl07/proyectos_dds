
import express from 'express'
const routerTelefono = express.Router();

import { servicio } from './telefonos.service.js'



routerTelefono.get("/telefonos", async(request, response) => {
    const todas = await servicio.obtener_todas()
    response.send(todas)
}) 

routerTelefono.get("/telefonos/:num", async (request, response) => {
    const num = parseInt(request.params.num)
    if (!isNaN(num)) {
        const telefonoEncontrada = await servicio.obtener_por_numero(num)
        if (telefonoEncontrada) 
            response.status(200).send(telefonoEncontrada)
        else
            response.sendStatus(404)
    }
})

routerTelefono.delete("/telefonos/:num", async (request, response) => {
    const num = parseInt(request.params.num)
    console.log(request.params)
    if (!isNaN(num)) {
        const telefonoEncontrada = await servicio.borrar(num)
        if (telefonoEncontrada) 
            response.status(200).send(telefonoEncontrada)
        else
            response.sendStatus(404)
    }
});

export default routerTelefono;




