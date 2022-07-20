import { GET_ALL_SHOES, GET_DETAILS, GET_SHOES_NAME } from "./actions";

const initialState = {
  products: [],
  detail: []
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
          products: action.payload
        }
    default:
      return state;
  }
}
