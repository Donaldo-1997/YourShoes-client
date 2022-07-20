const initialState = {
  products: [],
  detail: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_SHOES":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_DETAILS":
      return {
        ...state, 
        detail: action.payload,
      };
    default:
      return state;
  }
}
