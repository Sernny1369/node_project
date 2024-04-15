import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import defaultImage from './assets/wp12099915-4k-ultra-hd-breaking-bad-desktop-wallpapers.jpg';
import seriesData from "./assets/series.json";

import "./Singleserie.css";

const Serie = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, title, year, episodes, synopsis } = location.state;
  const [imageError, setImageError] = useState(false);

  var serieItem = seriesData.find(c=>c.id == id);
  var image = '../' + serieItem.image;

  const handleImageError = () => {
    setImageError(true);
  };

  const handleGoBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="series-contain">
      <div className="serie-header">
      <img
        src={imageError ? defaultImage : image}
        alt={title}
        className="serie-image"
        onError={handleImageError}
      />
        {/* <img src={image} alt={title} className="serie-image" /> */}
        <div className="serie-details">
          <h2 className="serie-title">{title}</h2>
          <hr></hr>
          <p className="serie-year"><strong> Année de sortie </strong>{year}</p>
          <p className="serie-numEpisodes"><strong> Nombre d'épisodes </strong>{episodes} épisodes</p>
          <hr></hr>
          <p className="serie-synopsis">{synopsis}</p>
        </div>
      </div>
      <div className="serie-content">
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum. Why do we use it? It is a long established fact
        that a reader will be distracted by the readable content of a page when
        looking at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using
        'Content here, content here', making it look like readable English. Many
        desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover
        many web sites still in their infancy. Various versions have evolved
        over the years, sometimes by accident, sometimes on purpose (injected
        humour and the like).
        <br></br>
        <br></br>
        Where does it come from? Contrary to popular belief, Lorem Ipsum is not
        simply random text. It has roots in a piece of classical Latin
        literature from 45 BC, making it over 2000 years old. Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem
        Ipsum passage, and going through the cites of the word in classical
        literature, discovered the undoubtable source. Lorem Ipsum comes from
        sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
        Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
        treatise on the theory of ethics, very popular during the Renaissance.
        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
        from a line in section 1.10.32.
        <br></br>
        <br></br>
        <button className="serie-back-button" onClick={handleGoBackClick}>
          Retour arrière
        </button>
      </div>
    </div>
  );
};

export default Serie;
