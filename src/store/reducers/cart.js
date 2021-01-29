import { ADD_PRODUCT } from "../actionTypes";

const initialState = {
//   allIds: [],
//     byIds: {},
  cart: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const { product } = action.payload;
      return {
        ...state,
        // allIds: [...state.allIds, id],
        // byIds: {
        //   ...state.byIds,
        //   [id]: {
        //     content,
        //     completed: false
        //   }
        // }
        cart: [...state.cart, product]
      };
    }
    default:
      return state;
  }
}