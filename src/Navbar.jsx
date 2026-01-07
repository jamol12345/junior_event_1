import React from 'react';
import "./Navbar.css";
import { useParams, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-container">
      <Link to={"/hafta/1/dushanba"}>Dushanba</Link>
      <Link to={"/hafta/2/seshanba"}>Seshanba</Link>
      <Link to={"/hafta/3/chorshnba"}>Chorshanba</Link>
      <Link to={"/hafta/4/payshanba"}>Payshanba</Link>
      <Link to={"/hafta/5/juma"}>Juma</Link>
      <Link to={"/hafta/6/shanba"}>Shanba</Link>
      <Link to={"/hafta/7/yakshanba"}>Yakshanba</Link>
    </div>
  )
}

export default Navbar;
