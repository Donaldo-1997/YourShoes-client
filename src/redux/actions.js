import axios from 'axios'


export function getAllShoes(){
    return async function(dispatch){
        const results = await axios(`http://localhost:3001/shoes`)
        //console.log(results)
        dispatch({
            type: "GET_ALL_SHOES",
            payload: results.data
        })
    }
}