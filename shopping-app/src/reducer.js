export const ACTION = {
  SET_ITEMS: "set-items",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.SET_ITEMS:
      return {
        ...state,
        items: action.items,
      };
    default:
      return state;
  }
};

export const initialState = {
  items: [],
};
