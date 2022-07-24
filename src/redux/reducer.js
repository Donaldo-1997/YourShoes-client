import {
  ADD_ONE_TO_CART,
  DELETE_ONE_FROM_CART,
  FILTER_BY_BRAND,
  FILTER_BY_PRICE,
  GET_ALL_SHOES,
  GET_DETAILS,
  GET_SHOES_NAME,
  LOGIN_USER,
  POST_USER,
} from "./actions";

const initialState = {
  products: [],
  detail: [],
  cart: [],
  filteredProducts: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SHOES:
      return {
        ...state,
        products: action.payload,
      };

    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_SHOES_NAME:
      return {
        ...state,
        products: action.payload,
      };

    case ADD_ONE_TO_CART:
      const allProducts = state.products;
      // console.log(allProducts)
      const cartProducts = allProducts.filter(
        (product) => product.id === action.payload
      );
      //console.log(cartProducts);
      return {
        ...state,
        cart : [...state.cart, ...cartProducts]
      };

    case DELETE_ONE_FROM_CART:
      const productsToDelete = state.products
        productsToDelete.filter((product) => product.id !== action.payload)
      return {
        ...state,
        cart : state.cart
      }

    case FILTER_BY_BRAND:
      // console.log("hola", action.payload)
      return{
        ...state,
        filteredProducts: action.payload,
        products: action.payload
      }

      case FILTER_BY_PRICE:
      return{
        ...state,
        filteredProducts: action.payload,
        products: action.payload
      }

    case POST_USER: {
      return {
        ...state,
      };
    }

    case LOGIN_USER: {
      return {
        ...state,
      };
    }
    
    default:
      return state;
  }
}
