import { useState } from 'react'
import Error from './Error'
import PropTypes from "prop-types"

function Formulario({ busqueda, setBusqueda, setConsultar }) {
    
    

     const [error, setError] = useState(false)

     //extraer ciudad y pais

     const { ciudad, pais } = busqueda

     //funcion que lee los datos de los formularios

     const handleChange = e => {
         //actualiza el state

         setBusqueda({
             ...busqueda,
             [e.target.name] : e.target.value
         })
     }
     const handleSubmit = e =>{
         e.preventDefault()

         //validar
         if(ciudad.trim() === '' || pais.trim() === ''){
             setError(true)
             return
         }

         setError(false)

         setConsultar(true)


     }

    return (
        <form 
          action=""
          onSubmit={handleSubmit}
        >
            { error ? <Error mensaje="Ambos campos son obligatorios" /> : null }
            <div className="input-field col s12">
                <input 
                  type="text"
                  name="ciudad"
                  id="ciudad"
                  value={ciudad}
                  onChange={e => handleChange(e)}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select 
                  name="pais" 
                  id="pais"
                  value={pais}
                  onChange={e => handleChange(e)}
                >
                    <option value="">-- Seleccione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="VE">Venezuela</option>
                </select>
                <label htmlFor="pais">País: </label>
            </div>

            <div className="input-field col s12">
                <input 
                  type="submit" 
                  value="Buscar Clima"
                  className="waves-effect waves-light btn btn-large btn-block yellow accent-4" 
                />
            </div>
        </form>
    )
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    setBusqueda: PropTypes.func.isRequired,
    setConsultar: PropTypes.func.isRequired
}

export default Formulario
