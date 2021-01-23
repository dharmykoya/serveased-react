const initialState = {
  cart: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state.cart
      };
    default: return state
      break;
  }
}


export default reducer