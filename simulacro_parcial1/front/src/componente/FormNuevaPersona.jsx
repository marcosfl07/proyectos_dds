import {handleSubmit, register, formState, useForm} from 'react-hook-form';

 
function FormNuevaPersona(){
    const {handleSubmit, register, formState:{errors}} = useForm();
    //const onSubmit=(data) =>{console.log('Datos de la nueva Persona: ',data);}
 
    function guardar(datos){
        alert(`${datos.documento}${datos.nombre}${datos.apellido}${datos.edad}`)
    }
    
    return (
        <>
        <form onSubmit={handleSubmit(guardar)}>
                <br/><br/>
                <tr>
                    <td>Documento: </td>
                    <td><input type="number" {
                        ...register('documento', {required: 'El documento es requerido!!'})}/>
                        { errors.documento && errors.documento.message }
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>Nombre: </td>
                    <td><input type="text" {
                        ...register('nombre', {required: 'El Nombre es requerido!!'})}/>
                        { errors.nombre && errors.nombre.message }
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>Apellido: </td>
                    <td><input type="text" {
                        ...register('apellido', {required: 'El Apellido es requerido!!'})}/>
                        { errors.apellido && errors.apellido.message }
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>Edad:</td>
                    <td><input type="number" {
                        ...register('edad', {required: 'La edad es requerida!!'})}/>
                        { errors.edad && errors.edad.message }
                    </td>
                </tr>
                
                <button type="submit">
                    Guardar
                </button>
        </form>
        </>
    );
}
export default FormNuevaPersona;






