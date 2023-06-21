import { Persona } from './personas.js'
import { sequelize } from './db.js'


class PersonasServicio {

    async obtener_todas() {
        return await Persona.findAll()
    }

    async obtener_por_documento(buscado) {
        return await Persona.findByPk(buscado)
    }

    async obtener_por_apellido(buscado) {
        return await Persona.findAll({
            where: { apellido: buscado }
        })
    }

    async agregar(nueva) {
        return await Persona.create(nueva)
    }

    async modificar(persona) {
        await persona.save()
    }
    
    async borrar(documento) {
        const encontrada = await Persona.findByPk(documento)
        encontrada?.destroy()
        return encontrada != null
    }
}

export const servicio = new PersonasServicio()