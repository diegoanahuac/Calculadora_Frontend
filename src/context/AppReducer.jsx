const appReducer = (state, action) => {
    switch (action.type){
        case 'GET_GASTOS':
            return {
                ...state,
                loading: false,
                gastos: action.payload,
            }
        case 'DELETE_GASTO':
            return{
                ...state,
                loading: false,
                gastos: state.gastos.filter(gasto => gasto.id !== action.payload)
            }
        case 'ADD_GASTO':
            return{
                ...state,
                loading: false,
                gastos: [...state.gastos, action.payload]
            }
        case 'GASTOS_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
    }
}

export default appReducer