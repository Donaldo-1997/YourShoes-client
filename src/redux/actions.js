import axios from "axios";

export const GET_ALL_SHOES = "GET_ALL_SHOES"
export const GET_DETAILS = "GET_DETAILS"
export const GET_SHOES_NAME = "GET_SHOES_NAME"
export const ADD_ONE_TO_CART = 'ADD_ONE_TO_CART'

export function getAllShoes() {
  return async function (dispatch) {
    const results = await axios(`http://localhost:3001/shoes`);
    // console.log(results)
    dispatch({
      type: "GET_ALL_SHOES",
      payload: results.data,
    });
  };
}
export function getDetails(id) {
  return async function (dispatch) {
    const res = await axios(`http://localhost:3001/shoes/${id}`);
    return dispatch({
      type: "GET_DETAILS",
      payload: res.data,
    });
  };
}

export function getShoesName(name){
    // 
    
    return async function(dispatch){
        try {
            const results = await axios(`http://localhost:3001/shoes?name=${name}`)
            return dispatch({
                type : 'GET_SHOES_NAME',
                payload: results.data
                
            })
            
        } catch (error) {
            console.log(error)
            alert('Model of shoes not found')
        }

    }
}

export function addOneToCart(payload){
    // console.log(payload)
return ({
    type: ADD_ONE_TO_CART,
    payload
})
}

