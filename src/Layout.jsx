import React from 'react';
import { BrowserRouter, Routes, route, Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
    <div>
        <nav style={{height: "80px", color: "white", background: "#222", display: "flex", justifyContent: "space-around", alignItems: "center"}}>
            <Link to="/home" element={<h2>Bu bizning bosh sahifamiz</h2>}><h2>Bosh Sahifa</h2></Link>
            <Link to="/about" element={<h2>Bu biz haqimizda</h2>}><h2>Biz haqimizda</h2></Link>
            <Link to="/contact" element={<h2>Bu bizning kontaklarimiz</h2>}><h2>Bizning kontaktlarimiz</h2></Link>
        </nav>

        <main><Outlet /></main>

        <footer style={{height: "80px", color: "white", background: "#222", display: "flex", justifyContent: "space-around", alignItems: "center"}}>
            <Link to="/home" element={<h2>Bu bizning bosh sahifamiz</h2>}><h2>Bosh Sahifa</h2></Link>
            <Link to="/about" element={<h2>Bu biz haqimizda</h2>}><h2>Biz haqimizda</h2></Link>
            <Link to="/contact" element={<h2>Bu bizning kontaklarimiz</h2>}><h2>Bizning kontaktlarimiz</h2></Link>
        </footer>
    </div>
  );
}

export default Layout;