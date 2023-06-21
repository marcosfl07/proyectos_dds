const FilaPersona = ({p, detalleClick, borrarClick, editarClick}) => {
    return(
        <tr>
            <td>{p.documento}</td>
            <td>{p.nombre}</td>
            <td>{p.apellido}</td>
            <td>{p.edad}</td>
            <td><button value="Detalle" onClick={() => detalleClick(p)}>Ver Detalle</button> </td>
            <td><button value="Borrar" onClick={() => borrarClick(p.documento)}>Borrar</button> </td>
            <td><button value="Editar" onClick={() => editarClick(p.documento)}>Editar</button> </td>
        </tr>
    )
}

export default FilaPersona