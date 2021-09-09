import { useState, useEffect } from 'react'
import { Fragment } from "react"
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  const [busqueda, setBusqueda] = useState({ 
    ciudad: '',
    pais: ''
 })

 

  const [consultar, setConsultar] = useState(false)
  const [resultado, setResultado] = useState({})
  const [error, setError] = useState(false)

  const { ciudad, pais } = busqueda

  useEffect(() => {
    const consultarApi = async () => {

      if(consultar) {
        const appId = "25a4e857ec9d8e049bb58ecedd5e90c5"

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

        const respuesta = await fetch(url)
        const resultadoApi = await respuesta.json()

        setResultado(resultadoApi)
        setConsultar(false)

        // Detecta si hubo resultados correctos en la consulta
        
        if(resultadoApi.cod === "404") {
          setError(true)
        } else {
          setError(false)
        }

        
      }
      
    }
    consultarApi()
    // eslint-disable-next-line
  }, [consultar])




  let componente

  if (error) {
    componente = <Error mensaje="No hay resultados" />

  } else{
    componente = <Clima 
                    resultado={resultado}
                  />
  }
  

  return (
    <Fragment>
      <Header
        titulo="Clima React App"
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario 
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
