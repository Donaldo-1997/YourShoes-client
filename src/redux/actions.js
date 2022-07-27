import axios from "axios";

export const GET_ALL_SHOES = "GET_ALL_SHOES";
export const GET_DETAILS = "GET_DETAILS";
export const GET_SHOES_NAME = "GET_SHOES_NAME";
export const ADD_ONE_TO_CART = "ADD_ONE_TO_CART";
export const DELETE_ONE_FROM_CART = "DELETE_ONE_FROM_CART";
export const FILTER_BY_BRAND = "FILTER_BY_BRAND";
export const POST_USER = "POST_USER";
export const LOGIN_USER = "LOGIN_USER";
export const FILTER_BY_PRICE = "FILTER_BY_PRICE";
export const BRAND_PRICE_FILTER = "BRAND_PRICE_FILTER";
export const HYDRATATE_FROM_LS ="HYDRATATE_FROM_LS"
export const REMOVER_TODO = "REMOVER_TODO"
export const MERCADOPAGO_PAYMENT = 'MERCADOPAGO_PAYMENT'

export function removerTodo(){
  return{
    type: REMOVER_TODO,
  }
}
export function getAllShoes() {
  return async function (dispatch) {
    const results = await axios(`http://localhost:3001/shoes`);
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
      alert("Model of shoes not found");
    }
  };
}

export function addOneToCart(payload) {
  return {
    type: ADD_ONE_TO_CART,
    payload,
  };
}

export function deleteOneToCart(payload) {
  return {
    type: DELETE_ONE_FROM_CART,
    payload: payload,
  };
}

export function getAllBrands() {
  return async function () {
    await axios(`http://localhost:3001/brands`);
  };
}

export function filterByBrand(payload) {
  return async function (dispatch) {
    const results = await axios(`http://localhost:3001/shoes?brand=${payload}`);
    return dispatch({
      type: FILTER_BY_BRAND,
      payload: results.data,
    });
  };
}

export function filterByPrice(priceMin, priceMax) {
  return async function (dispatch) {
    const results = await axios(
      `http://localhost:3001/shoes?priceMin=${priceMin}&priceMax=${priceMax}`
    );
    return dispatch({
      type: FILTER_BY_PRICE,
      payload: results.data,
    });
  };
}

export function postUser(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.post(
        `http://localhost:3001/login/signup`,
        payload
      );

      dispatch({
        type: POST_USER,
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function Login(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.post(
        `http://localhost:3001/login/signin`,
        payload
      );

      dispatch({
        type: LOGIN_USER,
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function brandAndPriceFilter(brand, priceMin, priceMax) {
  return async function (dispatch) {
    try {
      const results = await axios(
        `http://localhost:3001/shoes?brand=${brand}&priceMin=${priceMin}&priceMax=${priceMax}`
      );
      dispatch({
        type: BRAND_PRICE_FILTER,
        payload: results.data,
      });
      return results.data;
    } catch (err) {
      throw err;
    }
  };
}

export function hydratateFromLocalStorage(payload) {
  return {
    type: "HYDRATATE_FROM_LS",
    payload,
  };
}
export function createOrder(payload) {
  return async function (dispatch) {
    const res = await axios.post(`http://localhost:3001/mercadopago`,{cart:payload.cart});
    return dispatch({
      type: "CREATE_ORDER",
      payload: res.data,
    });
  };
}

// export function getOrder (){
//   return function(dispatch){
//     return fetch(`http://localhost:3001/orders`)
//     .then(response => response.json())
//     .then(json =>{
//       dispatch({
//         type: "GET_ORDER",
//         payload:json
//       })
//     })
//   }
// }

// export const goToCheckout = ()=> {
//   const productsInCart = JSON.parse(localStorage.getItem('cart'));
//   return axios.post('/checkout', { productsInCart })
//     .then(res => window.location = res.data.init_point)
//     .catch(err => console.error(err));
// };



// export const changeOrderStatus = userId => (dispatch, getState) => {
//   const url = window.location.href.slice(window.location.href.indexOf('?'));
//   const status = url.slice(url.indexOf('&status') + 1).split('=')[1].split('&')[0];
//   if (status === 'approved' || status === 'pending') {
//       const products = JSON.parse(localStorage.getItem('cart'));
//       axios.post('/user/send-order', {order: products, userId})
//       .then(res => {
//           dispatch({
//               type: "SEND_ORDER_EMAIL",
//               order: res.data
//           });
//       })
//       .catch(err => console.log("ERROR ENVIANDO MAIL: ", err));

//       const promises = products.map(product => {
//           return axios.put('/product/updateStock', {
//             form: {...product, stock: product.stock - product.quantity}
//           })
//           .then(res => console.log(res))
//           .catch(err => console.log(err));
//       });

//       Promise.all(promises)
//       .then(res => {
//           return axios.put(`/checkout/${userId}`, {status})
//           .then(response => {
//               dispatch({
//                   type: "CHANGE_ORDER_STATUS",
//                   order: response.data
//               });
//               window.location.search = window.location.search.split('?')[0];
//               localStorage.removeItem('cart');
//           })
//       })
//       .catch(err => console.log('SE PUDRIÓ TODO'));
//   } else {
//       return axios.put(`/checkout/${userId}`, {status})
//       .then(res => {
//       dispatch({
//           type: "CHANGE_ORDER_STATUS",
//           order: res.data
//       });
//       window.location.search = window.location.search.split('?')[0];
//       localStorage.removeItem('cart');
//       })
//       .catch(err => console.log(err));
//   };
// }