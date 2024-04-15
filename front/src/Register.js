import React, { useState } from "react";
import "./Form.css";
import { Link } from 'react-router-dom';

function Inscription() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [telephone, setTelephone] = useState("");
  const [error, setError] = useState(null);

  const isValidEmail = (email) => {
    return email.includes("@");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Reset error message
    setError("");
  
    // Validate form inputs
    if (!nom) {
      setError("Veuillez entrer votre nom.");
      return;
    }
    if (!prenom) {
      setError("Veuillez entrer votre prénom.");
      return;
    }
    if (!email) {
      setError("Veuillez entrer votre adresse e-mail.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Veuillez entrer une adresse e-mail valide.");
      return;
    }
    if (!password) {
      setError("Veuillez entrer un mot de passe.");
      return;
    }
    if (password.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères.");
      return;
    }
    if (!dateNaissance) {
      setError("Veuillez entrer votre date de naissance.");
      return;
    }
    if (!telephone) {
      setError("Veuillez entrer votre numéro de téléphone.");
      return;
    }
    
    // Submit form data
    alert("Inscription réussie !");
  };
  
  return (
    <div className="container">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(event) => setNom(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="prenom">Prénom</label>
          <input
            type="text"
            id="prenom"
            value={prenom}
            onChange={(event) => setPrenom(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateNaissance">Date de naissance</label>
          <input
            type="date"
            id="dateNaissance"
            value={dateNaissance}
            onChange={(event) => setDateNaissance(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telephone">Numéro de téléphone</label>
          <input
            type="tel"
            id="telephone"
            value={telephone}
            onChange={(event) => setTelephone(event.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="buttons">
          <button type="submit">S'inscrire</button>
        </div>
        <br></br>
          <Link to="/connexion">
              J'ai un compte, me connecter
          </Link>
      </form>
    </div>
    
  );
}

export default Inscription;
