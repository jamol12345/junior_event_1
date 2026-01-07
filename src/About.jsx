import React from "react";

const About = ({ user, cart }) => {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Foydalanuvchi</h2>

      {user && (
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <p>ID: {user.id}</p>
          <p>Ism: {user.name}</p>
          <p>Familiya: {user.surname}</p>
          <p>Email: {user.email}</p>
        </div>
      )}

      <h2 style={{ marginTop: "30px" }}>Xaridlar</h2>

      {cart.length === 0
        ? <p>Hech narsa sotib olinmagan</p>
        : cart.map((item, i) => (
            <div key={i} style={{ display: "flex", marginBottom: "10px" }}>
              <img src={item.img} width="70" />
              <div style={{ marginLeft: "10px" }}>
                <b>{item.name}</b>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default About;