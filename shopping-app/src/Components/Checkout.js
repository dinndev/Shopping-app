import React, { useState } from "react";
import { useDataContext } from "../DataProvider";
import { Link } from "react-router-dom";
import { ACTION } from "../reducer";

function Checkout() {
  const [{ cart, items }, dispatch] = useDataContext();

  const removeItem = (newItemid) => {
    // cart.filter(({ id }) => id !== newItemid);
    const item = cart.filter(({ id }) => id !== newItemid);
    dispatch({
      type: ACTION.REMOVE_ITEMS_IN_CART,
      cart: item,
    });
  };
  //   const [quantity, setQuantity] = useState(1);
  //   const [total, setTotal] = useState(0);
  //   const addQuantityOfItem = (_) => {
  //     setQuantity(quantity + 1);
  //   };
  //   const decreaseQuantityOfItem = (_) => {
  //     setQuantity(quantity - 1);
  //   };
  //   const handleTotalPriceofItem = (quan, price) => {
  //     const total = price * quan;
  //     return total;
  //   };
  return (
    <div>
      {cart.length === 0 ? (
        <p>Add to items to cart</p>
      ) : (
        cart.map(({ image, price, name, description, id }) => {
          return (
            <div key={id}>
              <img src={image} alt={name} />
              <p>{name}</p>
              <button onClick={(_) => removeItem(id)}>X</button>
            </div>
          );
        })
      )}
      <Link to="/"> Items</Link>
    </div>
  );
}

export default Checkout;
