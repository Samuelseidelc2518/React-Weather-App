import { useState, useEffect } from 'react'
import { Fragment } from "react"
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {

  const [busqueda, setBusqueda] = useState({ 
    ciudad: '',
    pais: ''
 })

  const [consultar, setConsultar] = useState(false)

  const { ciudad, pais } = busqueda

  useEffect(() => {
    const consultarApi = async () => {

      const appId = "25a4e857ec9d8e049bb58ecedd5e90c5"

      const url = `api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      console.log(resultado)
    }
    consultarApi()
  }, [consultar])

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
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
