import {
  ADD_ONE_TO_CART,
  DELETE_ONE_FROM_CART,
  FILTER_BY_BRAND,
  FILTER_BY_PRICE,
  FILTER_BY_CATEGORY,
  FILTER_BY_SIZE,
  GET_ALL_SHOES,
  GET_ALL_CATEGORIES,
  GET_DETAILS,
  GET_SHOES_NAME,
  LOGIN_USER,
  POST_USER,
  HYDRATATE_FROM_LS,
  REMOVER_TODO,
  COMBINATION_FILTERS,
  COMBINATION_FILTERS1,
  COMBINATION_FILTERS2,
  COMBINATION_FILTERS3,
  COMBINATION_FILTERS4,
  COMBINATION_FILTERS5,
  COMBINATION_FILTERS6,
  COMBINATION_FILTERS7,
  COMBINATION_FILTERS8,
  COMBINATION_FILTERS9,
  COMBINATION_FILTERS10,
  COMBINATION_FILTERS11,
  COMBINATION_FILTERS_12,
  COMBINATION_FILTERS_13,
  COMBINATION_FILTERS14,
  COMBINATION_FILTERS15,
  COMBINATION_FILTERS16
} from "./actions";

const initialState = {
  products: [],
  detail: [],
  cart: [],
  filteredProducts: [],
  categories: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SHOES:
      return {
        ...state,
        products: action.payload,
      };
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
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
        products: action.payload
      }
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload
      }
    case FILTER_BY_SIZE:
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload,
      };

    case COMBINATION_FILTERS:
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload
      }
    case COMBINATION_FILTERS1:
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload
      }
    case COMBINATION_FILTERS2:
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload
      }
    case COMBINATION_FILTERS3:
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload
      }
    case COMBINATION_FILTERS4:
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload
      }
    case COMBINATION_FILTERS5:
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload
      }
    case COMBINATION_FILTERS6:
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload
      }
    case COMBINATION_FILTERS7:
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload
      }
    case COMBINATION_FILTERS8:
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload
      }
    case COMBINATION_FILTERS9:
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload
      }
    case COMBINATION_FILTERS10:
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload
      }
    case COMBINATION_FILTERS11:
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload
      }
    case COMBINATION_FILTERS_12:
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload
      }
    case COMBINATION_FILTERS_13:
      return {
        ...state,
        filteredProducts: action.payload,
        products: action.payload
      }
    case COMBINATION_FILTERS14:
      return{
        ...state,
        filteredProducts: action.payload,
        products: action.payload
      }
    case COMBINATION_FILTERS15:
      return{
        ...state,
        filteredProducts: action.payload,
        products: action.payload
      }
    case COMBINATION_FILTERS16:
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
