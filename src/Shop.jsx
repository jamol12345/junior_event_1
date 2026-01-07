import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const products = [
  { id: 1, name: "Telefon", price: 300, img: "📱" },
  { id: 2, name: "Noutbuk", price: 800, img: "💻" },
  { id: 3, name: "Quloqchin", price: 50, img: "🎧" }
];

const Shop = () => {
  const { cart, setCart } = useContext(UserContext);

  return (
    <>
      <h2>Mahsulotlar</h2>

      {products.map(p => (
        <div key={p.id}>
          <h3>{p.img} {p.name}</h3>
          <p>${p.price}</p>
          <button onClick={()=>setCart([...cart, p])}>Sotib olish</button>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Shop;