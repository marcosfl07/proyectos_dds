import { Telefono } from './telefonosSequelize.js'
import { sequelize } from '../db.js'


class TelefonoServicio {

    async obtener_todas() {
        return await Telefono.findAll()
    }

    async obtener_por_numero(buscado) {
        return await Telefono.findByPk(buscado)
    }



    async agregar(nueva) {
        return await Telefono.create(nueva)
    }

    async modificar(telefono) {
        await telefono.save()
    }
    
    async borrar(numero) {
        const encontrada = await Telefono.findByPk(numero)
        encontrada?.destroy()
        return encontrada != null
    }
}

export const servicio = new TelefonoServicio()