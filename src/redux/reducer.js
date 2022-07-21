import {
  ADD_ONE_TO_CART,
  DELETE_ONE_FROM_CART,
  GET_ALL_SHOES,
  GET_DETAILS,
  GET_SHOES_NAME,
} from "./actions";

const initialState = {
  products: [],
  detail: [],
  cart: [],
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

    const allProducts = state.products
    // console.log(allProducts)
    const cartProducts = allProducts.filter((product) => product.id === action.payload)
    console.log(cartProducts)
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
    default:
      return state;
  }
}
