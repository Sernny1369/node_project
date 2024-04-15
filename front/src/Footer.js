import React from "react";
import logo from "./logo.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo" />
          <div class="contact">
            <p><strong>Call :</strong> <a href="tel:+330508090607">05 08 09 06 07 (+33)</a></p>
            <p><strong>Mail :</strong> <a href="mailto:efreiflix@efrei.fr">efreiflix@efrei.fr</a></p>
            <p><strong>Location :</strong> 47 Rue Wall street</p>
          </div>

        </div>
        <div className="footer-nav">
          <h4>Navigation</h4>
          <br></br>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/series">Mes séries</a>
            </li>
            <li>
              <a href="/#footer">Contact</a>
            </li>
            <li>
              <a href="/connexion">Connexion</a>
            </li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <br></br>
          <form>
            <label htmlFor="email">S'inscrire à la newsletter:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Entrez votre email"
              required
            />
            <button type="submit">S'inscrire</button>
          </form>
        </div>
      </div>
      <div className="copirights">
          Copirights. EFREIFLIX created by Sarah
      </div>
    </footer>
  );
}

export default Footer;
