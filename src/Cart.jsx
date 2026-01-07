import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Cart = () => {
  const { cart } = useContext(UserContext);

  if (cart.length === 0) {
    return <h2>Siz hali hech narsa sotib olmadingiz</h2>;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <h2>Savat</h2>

      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.img} {item.name} - ${item.price}</p>
          <hr />
        </div>
      ))}

      <h3>Jami: ${Math.round(total)}</h3>
    </>
  );
};

export default Cart;