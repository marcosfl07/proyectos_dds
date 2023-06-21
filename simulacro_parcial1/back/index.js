import routes from './routes/personas.js';
import routesTelefono from './routes/telefonos.js';
import fs from 'fs'
import { Persona } from './personas.js'
import { sequelize } from './db.js'
import { servicio } from './personas.service.js'
//import { servicio } from './routes/telefonos.service.js'
import express from 'express'
import cors from 'cors'

async function main() {

    const app = express()
    await sequelize.sync()
    //app.use(filtrar_9)
    app.use(cors())
    //app.use(log_consola);


    
    app.use('/',routes);
    app.use('/',routesTelefono);
    

    app.listen(8001)
}

main()  