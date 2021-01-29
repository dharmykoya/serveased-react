import { UPDATE_CART } from "../actionTypes";

const initialState = {
  cart: [],
  totalPrice: 0
};

const sumProduct = items => {
  return items.reduce((acc, current) => {
    return current.price * current.count + acc;
  }, 0);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART: {
      const { cart } = action;
      return {
        ...state,
        cart: [...cart],
        totalPrice: sumProduct(cart)
      };
    }
    default:
      return state;
  }
};

export default reducer;
