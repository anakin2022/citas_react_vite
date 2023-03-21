import { useState, useEffect } from 'react';
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Listadopacientes from "./components/Listadopacientes";


function App() {
   
  /*La sgte linea dice: si no existe aun pacientes en localstorage agrega arreglo vacio
  coloco la expresion JSON.parse para que convierta la variable de string
  desde localStorage en un arreglo si existe*/
  const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];

  //Este arreglo se usa para crear los pacientes
  const [pacientes, setPacientes] = useState(INITIAL);

  //Este arreglo se usara para editar la info de un paciente 
  const [paciente, setPaciente] = useState([]);

/*

/al parecer en los ultimas versiones de react este useEffect no funciona.

  useEffect(() => {
    
    // Este useEffect carga una sola vez, porque no tiene variable o arreglo en 
    // su segundo parametro. se ejecutara al cargar el componente y verificara si hay un item pacientes
    // en el localstorage. 
    
    const obtenerLS = () => {
      //La sgte linea dice: si no existe aun pacientes agrega arreglo vacio
      //coloco la expresion JSON.parse para que convierta la variable de string
      //desde localStorage en un arreglo
      console.log('localStorage ' + localStorage.getItem('pacientes'))
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);
*/

  /*  Con este useEffect grabaremos al localstorage el arreglo de pacientes 
  en el momento que se haga un cambio de cualquier tipo al mismo.  */
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
    console.log('componente listo o cambio paciente')
  }, [pacientes])


  const eliminarPaciente = (id) => {
    console.log('eliminando paciente', id)

    /*esta linea recorre el arreglo de los pacientes 
    y solo leera los datos de los pacientes distintos al que 
    estamos eliminando. */
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }


  return (
    /* Este es un comentario en JSX */
    <div className="container mx-auto mt-20">
      <Header
      />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          paciente={paciente}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
        <Listadopacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}

        />
      </div>

    </div>


  )

}

export default App
