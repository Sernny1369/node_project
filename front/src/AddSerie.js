import React, { useState } from "react";
import seriesData from "./assets/series.json";
import "./Addserie.css";
import video from "./assets/pexels-pavel-danilyuk-7233586-2560x1080-25fps(1).mp4";


const AddSerie = ({ setSeries, onClose }) => {
  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");
  const [episodes, setEpisodes] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  const [series, setSeriesData] = useState(seriesData);
  const generateUniqueId = () => {
    return Date.now().toString();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!title || !synopsis || !director || !year || !episodes || !image) {
      setError("Please fill in all fields.");
      return;
    }

    const newSerie = {
      id: generateUniqueId(),
      title,
      synopsis,
      director,
      year,
      episodes,
      image,
    };

    setSeriesData([...series, newSerie]);
    /* setSeries([...series, newSerie]);  */
    //onClose();
  };

  return (
    <div className="add-serie-wrapper">
      <video autoPlay muted loop className="background-video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="white-section">
        <h2>Ajouter une nouvelle série</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="synopsis">Synopsis</label>
            <textarea
              id="synopsis"
              value={synopsis}
              onChange={(event) => setSynopsis(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="director">Director</label>
            <input
              type="text"
              id="director"
              value={director}
              onChange={(event) => setDirector(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input
              type="number"
              id="year"
              value={year}
              onChange={(event) => setYear(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="episodes">Episodes</label>
            <input
              type="number"
              id="episodes"
              value={episodes}
              onChange={(event) => setEpisodes(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="buttons">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSerie;


