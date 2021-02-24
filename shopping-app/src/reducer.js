export const ACTION = {
  SET_ITEMS: "set-items",
  ADD_TO_CART: "add-to-cart",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.SET_ITEMS:
      return {
        ...state,
        items: action.items,
      };
    case ACTION.ADD_TO_CART:
      return {
        ...state,
        cart: action.cart,
      };
    default:
      return state;
  }
};

export const initialState = {
  items: [],
  cart: [],
};
