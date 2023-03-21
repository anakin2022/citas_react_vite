//import { useEffect } from 'react';
import Paciente from "./Paciente"


const Listadopacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  /**
   * //En la función useEffect, se comprueba si el arreglo de pacientes tiene una longitud mayor a cero, lo que indica que se ha agregado un nuevo paciente. Si es así, se imprime en la consola el mensaje "Nuevo paciente agregado".
        useEffect(() => {
        if(pacientes.length>0){
            console.log('Nuevo paciente agregado')
        }
        
    }, [pacientes])
   *  */

    return (
        <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-xl text-center mt-5 mb-10">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
                    </p>

                    {pacientes.map(paciente => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl text-center mt-5 mb-10">
                        Comienza agregrando pacientes {''}
                        <span className="text-indigo-600 font-bold ">y apareceran en el listado</span>
                    </p>


                </>

            )}



        </div>


    )
}

export default Listadopacientes


