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
  BRAND_PRICE_FILTER,
  HYDRATATE_FROM_LS,
  REMOVER_TODO
} from "./actions";

const initialState = {
  products: [],
  detail: [],
  cart: [],
  filteredProducts: [],
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
      const newItem = state.products.find(
        (product) => product.id === action.payload
      );
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };

    case DELETE_ONE_FROM_CART:
      const { productId, all } = action.payload;
      let itemToDelete = state.cart.find((item) => item.id === productId);

      if (all || itemToDelete.quantity === 1) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== productId),
        };
      }
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    case HYDRATATE_FROM_LS:
      return {
        ...state,
        cart: action.payload,
      };
    case FILTER_BY_BRAND:
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload,
      };

    case FILTER_BY_PRICE:
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload,
      };

    case BRAND_PRICE_FILTER:
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload,
      };

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
    case REMOVER_TODO: {
      return {
        ...state,
        cart: initialState.cart
      }
    }

    default:
      return state;
  }
}
