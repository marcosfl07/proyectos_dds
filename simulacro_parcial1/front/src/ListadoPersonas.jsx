import { useEffect, useState } from 'react'
import FilaPersona from './FilaPersona'
import {obtener_todas, borrar, editar} from './personas.service'

const ListadoPersonas = () => {

    async function buscar() {
        let data = await obtener_todas()
        setPersonas(data)
    }
        
    const [personas, setPersonas] = useState(null)
    useEffect(() => {
        buscar()
        console.log("useEffect")
    },[])
    
    const detalleClick = function(p) {
        alert(p.nombre)
    }

    const borrarClick = async function(doc) {
        alert(await borrar(doc))
        await buscar()
    }
    const editarClick = async function(doc) {
        alert(await editar(doc))
        await buscar()
    }

    return (
        <>
        <p>Listado de personas</p>
        <table border="1">
        {
            personas && personas.map(p =>
               <FilaPersona p={p} detalleClick={detalleClick} borrarClick={borrarClick} />
            )
        }
        </table>
        </>
    )

}

export default ListadoPersonas