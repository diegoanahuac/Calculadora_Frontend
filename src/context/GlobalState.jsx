import React, {createContext, useState, useEffect} from 'react'
import AppReducer from './AppReducer'

// Initial state
const initialState = {
    gastos: [ ],
    loading: true,
    error: null
}

//URL de API
const API_URL = 'https://calculadora-backend-2.onrender.com'

//creamos el contexto
export const GlobalContext = createContext(initialState)

//Creamos el provedor
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useState(AppReducer, initialState)

    //Cargar datos al iniciar la aplicación
    useEffect(() => {
        getGastos()
    },[])

    //Actions
    async function getGastos() {
        try {
            const response = await fetch(`${API_URL}`,{
                method: 'GET',
            })
            const data = await response.json()

            dispatch({
                type: 'GET_GASTOS',
                payload: data
            })
        } catch (error) {
            dispatch({
                type: 'GASTOS_ERROR',
                payload: error.message
            })
        }
    }

    async function deleteGasto(id){
        try {
            await fetch(`${API_URL}/${id}`,{
                method: 'DELETE',
            })
            dispatch({
                type: 'DELETE_GASTO',
                payload: id
            })
        }catch (error){
            dispatch({
                type: 'GASTOS_ERROR',
                payload: error.message
            })
        }
    }

    async function addGasto(gasto){
        try{
            const response = await fetch(`${API_URL}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(gasto)
            })

            const data = await response.json()

            dispatch({
                type: 'ADD_GASTO',
                payload: data
            })
        } catch (error){
            dispatch({
                type: 'GASTOS_ERROR',
                payload: error.message
            })
        }

    }


    return(<GlobalContext.Provider value = {{
        gastos: state.gastos,
        loading: state.loading,
        error: state.error,
        deleteGasto,
        addGasto
    }}>
        {children}
    </GlobalContext.Provider>)
}