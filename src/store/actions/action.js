export const updateCart = (cart) => {
  return async (dispatch) => {
    return dispatch({
      type: "UPDATE_CART",
      cart: cart
    })
  };
};
