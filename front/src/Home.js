import React from "react";
import "./Home.css";
import apple from "./assets/Apple_TV-Logo.wine.svg";
import disney from "./assets/Disney+-Logo.wine.svg";
import hbo from "./assets/HBO-Logo.wine.svg";
import netflix from "./assets/Netflix-Logo.wine.svg";
import youtube from "./assets/YouTube-Logo.wine.svg";
import prime from "./assets/Prime_Video-Logo.wine.svg";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="home-container">
        <h1 className="home-title">TOUTES VOS SÉRIES ICI </h1>
        <p className="home-description">
          Avec EFREIFLIX, gérez le visionnage en location des séries sur notre
          plateforme, en streaming, en illimité, et accessible depuis plus de
          180 pays
        </p>
        
        <Link to="/series"><button className="home-button">Voir nos séries</button></Link>
        
      </div>
      <div className="container">
        <div className="title">
          <h1> Pourquoi nous choisir ?</h1>
          <span></span>
        </div>
        <div className="reasons-container">
          <div className="reason">
            <h3>Sécurité</h3>
            <p>
              Nos solutions sont sécurisées et protègent vos données
              personnelles.
            </p>
          </div>
          <div className="reason">
            <h3>Nouveautés</h3>
            <p>
              Nous proposons régulièrement de nouvelles fonctionnalités pour
              améliorer votre expérience.
            </p>
          </div>
          <div className="reason">
            <h3>Prix bas</h3>
            <p>
              Nos tarifs sont compétitifs et abordables pour tous les budgets.
            </p>
          </div>
        </div>
      </div>
      <section>
        <div className="title">
          <h1>Nos partenaires</h1>
          <span></span>
        </div>
        <br />
        <br />
        <p>
          Une liste exaustive de nos principaux partenaires pour vous en offir,
          encore et toujours plus du contenu en illimité et en direct sur
          efreilix
        </p>
        <br />
        <br />
        <div className="partenaires">
          <div className="img">
            <img src={apple}  alt="" />
          </div>
          <div className="img">
            <img src={netflix}  alt="" />
          </div>
          <div className="img">
            <img src={disney}  alt="" />
          </div>
          <div className="img">
            <img src={youtube}  alt="" />
          </div>
          <div className="img">
            <img src={hbo}  alt="" />
          </div>
          <div className="img">
            <img src={prime}  alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
