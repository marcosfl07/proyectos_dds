import axios from 'axios'

const personas = [
    { nombre: "Juan", apellido: "Perez", edad: 23 },
    { nombre: "Juana", apellido: "Pereza", edad: 27 },
    { nombre: "Juano", apellido: "Perezo", edad: 21 }
]

async function obtener_todas_memoria() {
    return personas
}

async function obtener_todas() {
    const respuesta = await axios.get('http://localhost:8001/personas')
    return respuesta.data
}

async function borrar(documento) {
    const respuesta = await axios.delete('http://localhost:8001/personas/' + documento)
    return respuesta.status == 200
}
async function editar(documento) {
    const respuesta = await axios.put('http://localhost:8001/personas/' + documento)
    return respuesta.status == 200
}

//let obtener_todas = obtener_todas_API
//let obtener_todas = obtener_todas_memoria

export  {
    obtener_todas, borrar, editar
}
