//import { useEffect } from 'react';

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    console.log(paciente)

   /* useEffect(() => {
        console.log('El componente esta listo')
    }, [])*/

    const handleEliminar = () => {
        console.log('eliminando', id)
        const respuesta = confirm('deseas eliminar el paciente?');
        if(respuesta){
            eliminarPaciente(id)
        }
    }

    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    return (
        <div className="mx-5 my-10 px-5 py-10 rounded-xl bg-white shadow-md">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex justify-between mt-10">
                <button type="button" className="py-2 px-10 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md font-bold uppercase"
                   /**
                    * como la siguiente funcion lleva un argumento entonces 
                    * se debe usar un arrow function. En la funcion de eliminar no usamos 
                    * argumento entonces solo se coloca el nombre de la funcion
                    */
                   onClick={() => setPaciente(paciente)}>
                    Editar
                </button>
                <button type="button" className="py-2 px-10 bg-red-500 hover:bg-red-700 text-white rounded-md font-bold uppercase"
                    /* 
                    si colocas handleEliminar con parentesis es decir handleEliminar()
                    entonces lo ejecuta enseguida, sin parentesis esperara al evento clic 
                    */
                    onClick={handleEliminar}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente