import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddForm = () => {

    const [descripcion, setDescripcion] = useState('')
    const [importe, setImporte] = useState(0)

    const {addGasto} = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault()

        const nuevoGasto = {
            descripcion,
            importe: +importe
        }

        addGasto(nuevoGasto)

        setDescripcion('')
        setImporte(0)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="descripcion">Descripción</label>
                    <input
                        type="text"
                        id="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        placeholder="Por favor teclea la descripcion de tu gasto"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="importe">Importe</label>
                    <input
                        type="number"
                        id="importe"
                        value={importe}
                        onChange={(e) => setImporte(e.target.value)}
                        placeholder="Por favor teclea tu importe"
                    />
                </div>
                <button className="btn">Agregar gasto</button>
            </form>
        </>
    )
}

export default AddForm

