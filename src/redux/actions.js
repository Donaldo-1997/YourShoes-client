import axios from "axios";

export const GET_ALL_SHOES = "GET_ALL_SHOES"
export const GET_DETAILS = "GET_DETAILS"
export const GET_SHOES_NAME = "GET_SHOES_NAME"
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES"
export const ADD_ONE_TO_CART = 'ADD_ONE_TO_CART'
export const DELETE_ONE_FROM_CART = 'DELETE_ONE_FROM_CART'
export const FILTER_BY_BRAND = "FILTER_BY_BRAND"
export const POST_USER = 'POST_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const FILTER_BY_PRICE = 'FILTER_BY_PRICE'
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY'
export const FILTER_BY_SIZE = 'FILTER_BY_SIZE'
export const COMBINATION_FILTERS = 'COMBINATION_FILTERS'
export const COMBINATION_FILTERS1 = 'COMBINATION_FILTERS1'
export const COMBINATION_FILTERS2 = 'COMBINATION_FILTERS2'
export const COMBINATION_FILTERS3 = 'COMBINATION_FILTERS3'
export const COMBINATION_FILTERS4 = 'COMBINATION_FILTERS4'
export const COMBINATION_FILTERS5 = 'COMBINATION_FILTERS5'
export const COMBINATION_FILTERS6 = 'COMBINATION_FILTERS6'
export const COMBINATION_FILTERS7 = 'COMBINATION_FILTERS7'
export const COMBINATION_FILTERS8 = 'COMBINATION_FILTERS8'
export const COMBINATION_FILTERS9 = 'COMBINATION_FILTERS9'
export const COMBINATION_FILTERS10 = 'COMBINATION_FILTERS10'
export const COMBINATION_FILTERS11 = 'COMBINATION_FILTERS11'
export const COMBINATION_FILTERS_12 = 'COMBINATION_FILTERS_12'
export const COMBINATION_FILTERS_13 = 'COMBINATION_FILTERS_13'
export const COMBINATION_FILTERS14 = 'COMBINATION_FILTERS14'
export const COMBINATION_FILTERS15 = 'COMBINATION_FILTERS15'
export const COMBINATION_FILTERS16 = 'COMBINATION_FILTERS16'
export const HYDRATATE_FROM_LS = "HYDRATATE_FROM_LS"
export const REMOVER_TODO = "REMOVER_TODO"
export const MERCADOPAGO_PAYMENT = 'MERCADOPAGO_PAYMENT'

export function removerTodo() {
  return {
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

export function getAllCategories() {
  return async function (dispatch) {
    const results = await axios(`http://localhost:3001/categories`);
    return dispatch({
      type: GET_ALL_CATEGORIES,
      payload: results.data,
    });
  };
}
export function filterByBrand(payload) {
  return async function (dispatch) {
    const results = await axios(`http://localhost:3001/shoes?brand=${payload}`)
    return dispatch({
      type: FILTER_BY_BRAND,
      payload: results.data,
    });
  };
}

export function filterByCategory(payload) {
  return async function (dispatch) {
    const results = await axios(`http://localhost:3001/shoes?category=${payload}`)
    //console.log(results.data)
    return dispatch({
      type: FILTER_BY_CATEGORY,
      payload: results.data
    })
  }
}
export function filterBySize(payload) {
  return async function (dispatch) {
    const results = await axios(`http://localhost:3001/shoes?size=${payload}`)
    //console.log(results.data)
    return dispatch({
      type: FILTER_BY_SIZE,
      payload: results.data
    })
  }
}
export function filterByPrice(priceMin, priceMax) {
  //console.log("precio", priceMax)
  return async function (dispatch) {
    const results = await axios(`http://localhost:3001/shoes?priceMin=${priceMin}&priceMax=${priceMax}`)
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
      console.log(error)
    }
  }
};
export function Login(payload) {
  console.log('payload', payload)
  return async function (dispatch) {
    try {
      var json = await axios.post(`http://localhost:3001/login/signin`, payload)

      dispatch({
        type: LOGIN_USER,
        payload: json
      });
    } catch (error) {
      console.log(error)

    }

  }
};



export function hydratateFromLocalStorage(payload) {
  return {
    type: "HYDRATATE_FROM_LS",
    payload,
  };
}
export function createOrder(payload) {
  return async function (dispatch) {
    const res = await axios.post(`http://localhost:3001/mercadopago`, { cart: payload.cart });
    return dispatch({
      type: "CREATE_ORDER",
      payload: res.data,
    });
  };
}

export function combinationsFilter(brand, priceMin, priceMax) {
  return async function (dispatch) {
    try {
      const results = await axios(`http://localhost:3001/shoes?brand=${brand}&priceMin=${priceMin}&priceMax=${priceMax}`)
      dispatch({
        type: COMBINATION_FILTERS,
        payload: results.data
      })
      return results.data
    } catch (err) {
      throw err
    }
  };
}
export function combinationsFilter1(name, priceMin, priceMax) {
  return async function (dispatch) {
    try {
      const results = await axios(`http://localhost:3001/shoes?name=${name}&priceMin=${priceMin}&priceMax=${priceMax}`)
      dispatch({
        type: COMBINATION_FILTERS1,
        payload: results.data
      })
      return results.data
    } catch (err) {
      throw err
    }
  }
}
export function combinationsFilter2(brand, name, priceMin, priceMax) {
  return async function (dispatch) {
    try {
      const results = await axios(`http://localhost:3001/shoes?brand=${brand}&name=${name}&priceMin=${priceMin}&priceMax=${priceMax}`)
      dispatch({
        type: COMBINATION_FILTERS2,
        payload: results.data
      })
      return results.data
    } catch (err) {
      throw err
    }
  }
}
export function combinationsFilter3(name, brand) {
  return async function (dispatch) {
    try {
      const results = await axios(`http://localhost:3001/shoes?name=${name}&brand=${brand}`)
      dispatch({
        type: COMBINATION_FILTERS3,
        payload: results.data
      })
      return results.data
    } catch (err) {
      throw err
    }
  }
}
export function combinationsFilter4(category, priceMin, priceMax) {
  return async function (dispatch) {
    try {
      const results = await axios(`http://localhost:3001/shoes?category=${category}&priceMin=${priceMin}&priceMax=${priceMax}`)
      dispatch({
        type: COMBINATION_FILTERS4,
        payload: results.data
      })
      return results.data
    } catch (err) {
      throw err
    }
  }
}
export function combinationsFilter5(category, name) {
  return async function (dispatch) {
    try {
      const results = await axios(`http://localhost:3001/shoes?category=${category}&name=${name}`)
      dispatch({
        type: COMBINATION_FILTERS5,
        payload: results.data
      })
      return results.data
    } catch (err) {
      throw err
    }
  }
}
export function combinationsFilter6(brand, category) {
  return async function (dispatch) {
    try {
      const results = await axios(`http://localhost:3001/shoes?brand=${brand}&category=${category}`)
      dispatch({
        type: COMBINATION_FILTERS6,
        payload: results.data
      })
      return results.data
    } catch (err) {
      throw err
    }
  }
}
export function combinationsFilter7(category, brand, name) {
  return async function (dispatch) {
    try {
      const results = await axios(`http://localhost:3001/shoes?category=${category}&brand=${brand}&name=${name}`)
      dispatch({
        type: COMBINATION_FILTERS7,
        payload: results.data
      })
      return results.data
    } catch (err) {
      throw err
    }
  }
}
export function combinationsFilter8(category, brand, priceMax, priceMin) {
  return async function (dispatch) {
    try {
      const results = await axios(`http://localhost:3001/shoes?category=${category}&brand=${brand}&priceMin=${priceMin}&priceMax=${priceMax}`)
      dispatch({
        type: COMBINATION_FILTERS8,
        payload: results.data
      })
      return results.data
    } catch (err) {
      throw err
    }
  }
}
export function combinationsFilter9(category, name, priceMax, priceMin) {
  return async function (dispatch) {
    try {
      const results = await axios(`http://localhost:3001/shoes?category=${category}&name=${name}&priceMin=${priceMin}&priceMax=${priceMax}`)
      dispatch({
        type: COMBINATION_FILTERS9,
        payload: results.data
      })
      return results.data
    } catch (err) {
      throw err
    }
  }
}
export function combinationsFilter10(category, name, priceMax, priceMin, brand) {
  return async function (dispatch) {
    try {
      const results = await axios(`http://localhost:3001/shoes?category=${category}&name=${name}&brand=${brand}&priceMin=${priceMin}&priceMax=${priceMax}`)
      dispatch({
        type: COMBINATION_FILTERS10,
        payload: results.data
      })
      return results.data
    } catch (err) {
      throw err
    }
  }
}
export function combinationsFilter11(brand, priceMin, priceMax, size) {
  return async function (dispatch) {
    try {
      const results = await axios(`http://localhost:3001/shoes?size=${size}&brand=${brand}&priceMin=${priceMin}&priceMax=${priceMax}`)
      dispatch({
        type: COMBINATION_FILTERS11,
        payload: results.data
      })
      return results.data
    } catch (err) {
      throw err
    }
  }
}
export function combinationsFilter_12(size, priceMin, priceMax) {
  return async function (dispatch) {
    try {
      const results = await axios(`http://localhost:3001/shoes?size=${size}&priceMin=${priceMin}&priceMax=${priceMax}`)
      dispatch({
        type: COMBINATION_FILTERS_12,
        payload: results.data
      })
      return results.data
    } catch (err) {
      throw err
    }
  }
}
export function combinationsFilter_13(size, brand) {
  return async function (dispatch) {
    try {
      const results = await axios(`http://localhost:3001/shoes?size=${size}&brand=${brand}`)
      dispatch({
        type: COMBINATION_FILTERS_13,
        payload: results.data
      })
      return results.data
    } catch (err) {
      throw err
    }
  }
}

export function combinationsFilter14(size, brand, name, priceMin, priceMax) {
  return async function (dispatch) {
    try {
      const results = await axios(`http://localhost:3001/shoes?size=${size}&brand=${brand}&name=${name}&priceMin=${priceMin}&priceMax=${priceMax}`)
      dispatch({
        type: COMBINATION_FILTERS14,
        payload: results.data
      })
      return results.data
    } catch (err) {
      throw err
    }
  }
}

export function combinationsFilter15(size, name) {
  return async function (dispatch) {
    try {
      const results = await axios(`http://localhost:3001/shoes?size=${size}&name=${name}`)
      dispatch({
        type: COMBINATION_FILTERS15,
        payload: results.data
      })
      return results.data
    } catch (err) {
      throw err
    }
  }
}

export function combinationsFilter16(size, category) {
  return async function (dispatch) {
    try {
      const results = await axios(`http://localhost:3001/shoes?size=${size}&category=${category}`)
      dispatch({
        type: COMBINATION_FILTERS16,
        payload: results.data
      })
      return results.data
    } catch (err) {
      throw err
    }
  }
}