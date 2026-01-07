import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setUser({
      id: Date.now(),
      name,
      surname,
      email
    });

    navigate("/home");
  };

  return (
    <form
      onSubmit={submitHandler}
      style={{
        width: "350px",
        margin: "100px auto",
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "10px"
      }}
    >
      <h2>Login</h2>

      <input
        placeholder="Ism"
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <input
        placeholder="Familiya"
        onChange={(e) => setSurname(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", marginBottom: "15px" }}
      />

      <button style={{ width: "100%" }}>Kirish</button>
    </form>
  );
};

export default Login;