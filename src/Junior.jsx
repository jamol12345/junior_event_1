import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { FaShoppingBasket, FaShoppingCart } from "react-icons/fa";
import "./Junior.css";

const Junior = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ margin: "50px" }}>Junior</h2>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/" className="nav-link"><h3>Home</h3></Link>
          <Link to="/about" className="nav-link"><h3>About</h3></Link>
          <Link to="/contact" className="nav-link"><h3>Contact</h3></Link>

          <Link to="/cart">
            <span style={{ margin: "50px 50px 50px 30px", color: "black" }}>
              <FaShoppingCart /> ({cart.length})
            </span>
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer style={{ textAlign: "center", marginTop: "40px" }}>
        <hr />
        <p>Solihabibi Maxsudova</p>
      </footer>
    </>
  );
};

function Home({ cart, setCart }) {
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className='Home'>
      <header style={{backgroundImage: "url(https://img.freepik.com/premium-photo/winter-sale-new-year-christmas-holiday-shopping-concept-shopping-cart-red-percentage-sign-snow-effect-background-christmas-new-year-sale-concept_256259-3425.jpg)", backgroundSize: "cover", width: "1245px", height: "500px", marginLeft: "50px", color: "white", display: "flex", alignItems: "center"}}>
        <div>
          <h1 style={{ marginLeft: "50px" }}>
            <b>Yangi <br /> yil uchun <br /> sovg'alar do'koni</b>
          </h1>
          <p style={{ marginLeft: "50px" }}>Sovg'alar sotib oling</p>
        </div>
      </header>

      <section className='mt-5'>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>

          <Product name="Archa" price={999.98} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0jQKn3KlsJGdTC3N_o9Zytln9x614kvLmcA&s" addToCart={addToCart} />

          <Product name="Archa o'yinchoqlari" price={98.89} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORzHQLWJcRz4eRQXZljhIuQgdqTI80jtR7w&s" addToCart={addToCart} />

          <Product name="Paypoqlar" price={18.95} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAqkx9YV7efozM-5qV-WQMQynYUYReQ276iA&s" addToCart={addToCart} />

          <Product name="Santa Claus" price={46.85} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOi0DqL6q8xL1DyIi8Fe6zjg8yk4C1I6lfg&s" addToCart={addToCart} />

        </div>
      </section>
    </div>
  );
}

function Product({ name, price, img, addToCart }) {
  return (
    <div className="card" style={{ padding: "10px", borderRadius: "18px" }}>
      <img src={img} alt="" style={{ height: "300px", width: "250px" }} />
      <h4 style={{ textAlign: "center" }}><b>{name}</b></h4>
      <p style={{ textAlign: "center" }}>${price}</p>
      <button
        className="btn btn-dark mt-1"
        onClick={() => addToCart({ name, price, img })}
      >
        Sotib olish <FaShoppingBasket />
      </button>
    </div>
  );
}

function Cart({ cart }) {
  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Siz hali hech narsa sotib olmadingiz</h2>;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div style={{ padding: "40px" }}>
      <h2>Savat</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name} — ${item.price}</p>
          <hr />
        </div>
      ))}
      <h3>Jami: ${Math.round(total)}</h3>
    </div>
  );
}

function About() {
  return <h1>About Us Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

export default Junior;