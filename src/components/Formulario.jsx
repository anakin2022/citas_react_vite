import { useState, useEffect } from 'react';
import Error from './Error.jsx'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    useEffect(() => {
        //esto se utiliza para que no haga rerender con el objeto paciente, solo cuando se actualice el arreglo paciente
        //console.log(paciente)
        //El siguiente condicional verifica si el objeto existe y si tiene propiedades
        if (paciente && Object.keys(paciente).length > 0) {
            //   console.log('si hay algo')
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])


    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36).substring(2);
        //console.log(`fechaid: ${fecha}`)
        return random + fecha;
    }

    const handleSubmit = (e) => {
        //Funcion para validar el formulario.
        e.preventDefault()
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            console.log('Verifica la informacion, hay al menos un campo vacio')
            setError(true)
            return;
        }
        setError(false)

        //Objeto Paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,

        }
        //console.log(objetoPaciente)

        if (paciente.id) {
            //console.log('Editando paciente')
            //Le asigno el id del paciente que estamos editando.
            objetoPaciente.id = paciente.id
            console.log(objetoPaciente)
            console.log(paciente)

            //Lo siguiente lo hacemos para identificar el registro que estamos editando.
            //objetoPaciente es el objeto que estamos actualizando
            //(sino)tomamos pacienteState que es el objeto actual sin modificarse
            const pacientesActualizados = pacientes.map(
                pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState
            )

            //con esta linea cambio el arreglo pacientes con la info del nuevo array generado
            setPacientes(pacientesActualizados)
            setPaciente({})

        } else {
            //console.log('paciente nuevo')
            //Creo un nuevo id para este paciente
            objetoPaciente.id = generarId()

            /*Con esta linea agregamos al array de pacientes (objetoPaciente) 
            el nuevo paciente creado (pacientes) usando el operador Spread (...)*/
            setPacientes([...pacientes, objetoPaciente]);
        }



        /*Ahora necesitamos reiniciar el formulario de pacientes con campos vacios. 
        Esto lo hacemos solo cambiando el valor de la funcion que altera cada campo
        */

        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')


    }


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center">
                Añade pacientes y {''} <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
                onSubmit={handleSubmit}
            >
                {error && <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />

                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre propietario</label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email contacto propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha</label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    <textarea id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describa los sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}>
                    </textarea>
                </div>

                <input type="submit"
                    className="bg-indigo-600 w-full pd-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value={paciente.id ? 'Editar Paciente' : 'Agregar paciente'}></input>
            </form>
        </div>
    )
}

export default Formulario
