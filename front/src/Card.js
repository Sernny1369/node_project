import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
    import defaultImage from './assets/Game_of_Thrones_Men_Varys_Throne_583559_707x1024.jpg';

const Card = ({ id, image, title, year, episodes, synopsis }) => {
  const MAX_SYNOPSIS_LENGTH = 50;
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const handleViewMoreClick = () => {
    navigate(`/serie/${id}`, { state: { id, image, title, year, episodes, synopsis } });
  };

  const getShortSynopsis = () => {
    const words = synopsis.split(' ');
    if (words.length <= MAX_SYNOPSIS_LENGTH) {
      return synopsis;
    }
    return words.slice(0, MAX_SYNOPSIS_LENGTH).join(' ') + '...';
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="card">
      <img
        src={imageError ? defaultImage : image}
        alt={title}
        className="card-image"
        onError={handleImageError}
      />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <p className="card-year">{year}</p>
        <p className="card-numEpisodes">{episodes} épisodes</p>
        <p className="card-synopsis">{getShortSynopsis()}</p>
        <button className="card-button" onClick={handleViewMoreClick}>Voir plus</button>
      </div>
    </div>
  );
};

export default Card;
