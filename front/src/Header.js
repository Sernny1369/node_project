import React from "react";
import logo from "./logo.svg";
import "./Menu.css";

function Header() {
  return (
    <div className="menu-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="menu-items">
        <a href="/" className="menu-item">Accueil</a>
        <a href="/series" className="menu-item">Mes séries</a>
        <a href="/#footer" className="menu-item"> Nous contacter</a>
        <a href="/connexion" className="menu-item">Connexion</a>
      </div>
    </div>
    
  );
}

export default Header;
