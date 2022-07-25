import axios from "axios";

export const GET_ALL_SHOES = "GET_ALL_SHOES"
export const GET_DETAILS = "GET_DETAILS"
export const GET_SHOES_NAME = "GET_SHOES_NAME"
export const ADD_ONE_TO_CART = 'ADD_ONE_TO_CART'
export const DELETE_ONE_FROM_CART = 'DELETE_ONE_FROM_CART'
export const FILTER_BY_BRAND = "FILTER_BY_BRAND"
export const POST_USER = 'POST_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const FILTER_BY_PRICE = 'FILTER_BY_PRICE'
export const BRAND_PRICE_FILTER = 'BRAND_PRICE_FILTER'


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

export function getShoesName(name) {
  //

  return async function (dispatch) {
    try {
      const results = await axios(`http://localhost:3001/shoes?name=${name}`);
      return dispatch({
        type: "GET_SHOES_NAME",
        payload: results.data,
      });
    } catch (error) {
      console.log(error);
      alert("Model of shoes not found");
    }
  };
}

export function addOneToCart(payload) {
  // console.log(payload)
  return {
    type: ADD_ONE_TO_CART,
    payload,
  };
}

export function deleteOneToCart(payload){
    // console.log(payload)
  return ({
    type: DELETE_ONE_FROM_CART,
    payload
})
}

export function getAllBrands(){
  return async function(){
    await axios(`http://localhost:3001/brands`)
    
  }
}

export function filterByBrand(payload){
  return async function(dispatch){
    const results = await axios(`http://localhost:3001/shoes?brand=${payload}`)
    //console.log(results.data)
    return dispatch({
      type: FILTER_BY_BRAND,
      payload: results.data
    })
  }
}

export function filterByPrice(priceMin, priceMax){
  //console.log("precio", priceMax)
  return async function(dispatch){
    const results = await axios(`http://localhost:3001/shoes?priceMin=${priceMin}&priceMax=${priceMax}`)
    return dispatch({
      type: FILTER_BY_PRICE,
      payload: results.data
    })
  }
}


export function postUser(payload) {
  console.log('payload',payload)
  return async function (dispatch) {
      try {
          var json = await axios.post(`http://localhost:3001/login/signup`, payload)
     
          dispatch({
              type: POST_USER,
              payload:json
          });
      } catch (error) {
          console.log(error)
          
      }
     
  }
};

export function Login(payload) {
  console.log('payload',payload)
  return async function (dispatch) {
      try {
          var json = await axios.post(`http://localhost:3001/login/signin`, payload)
     
          dispatch({
              type: LOGIN_USER,
              payload:json
          });
      } catch (error) {
          console.log(error)
          
      }
     
  }
};

export function brandAndPriceFilter(brand, priceMin, priceMax){
  return async function (dispatch){
    try{
      const results = await axios(`http://localhost:3001/shoes?brand=${brand}&priceMin=${priceMin}&priceMax=${priceMax}`)
      dispatch({
        type: BRAND_PRICE_FILTER,
        payload: results.data
      })
      return results.data
    }catch(err){
      throw err
    }
  }
}

