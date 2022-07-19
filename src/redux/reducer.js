const initialState = {
    products: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case "GET_ALL_SHOES":
            //console.log(action.payload)
            return{
                ...state,
                products: action.payload
            }
        default: return state
    }
}