import React, { useState } from "react";
import "./Form.css";
import { Link } from 'react-router-dom';

function Connexion({ onRegisterClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Reset error messages
    setEmailError("");
    setPasswordError("");

    // Validate email and password
    if (!email) {
      setEmailError("Veuillez entrer une adresse e-mail.");
    } else if (!isValidEmail(email)) {
      setEmailError("Veuillez entrer une adresse e-mail valide.");
    }

    if (!password) {
      setPasswordError("Veuillez entrer un mot de passe.");
    } else if (!isValidPassword(password)) {
      setPasswordError("Le mot de passe doit contenir au moins 8 caractères.");
    }

    if (email && password) {
      alert(" Connexion effectuée")
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const isValidEmail = (email) => {
    return email.includes("@");
  };

  const isValidPassword = (password) => {
    return password.length >= 8;
  };

  return (
    <div className="container auth">
      <h1>Connexion</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>
        <div className="buttons">
          <button type="submit">Connexion</button>
        </div>
        <br></br>
          <Link to="/inscription">
              Je n'ai pas de compte, m'inscrire
          </Link>
      </form>
    </div>
  );
}

export default Connexion;