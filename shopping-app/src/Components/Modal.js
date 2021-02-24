import React, { useCallback } from "react";
import { useDataContext } from "../DataProvider";
import { ACTION } from "../reducer";

function Modal({ handleToggleClose, cartData }) {
  const [{ cart }, dispatch] = useDataContext();
  const addToCart = useCallback(() => {
    if (cart.length === 0) {
      dispatch({
        type: ACTION.ADD_TO_CART,
        cart: [...cart, cartData],
      });
    } else if (cart.some((items) => items.id == cartData.id)) {
      return;
    } else {
      dispatch({
        type: ACTION.ADD_TO_CART,
        cart: [...cart, cartData],
      });
    }
  }, [cart, cartData]);
  console.log(cart);
  return (
    <div className="flex flex-col">
      <div className="flex w-52">
        <button onClick={addToCart}>Add to cart</button>
        <button>Checkout</button>
        <button onClick={handleToggleClose}>X</button>
      </div>
    </div>
  );
}

export default Modal;
