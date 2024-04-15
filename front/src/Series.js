import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Series.css";
import seriesData from "./assets/series.json";
import { Link } from "react-router-dom";

const SeriesList = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    setSeries(seriesData);
  }, []);

  return (
    <div className="container">
      <div className="series-header">
        <h1>MES SÉRIES</h1>
        <Link to="/addseries"><button onClick={() => {}}>Ajouter une série</button></Link>
        
      </div>
      <div className="series-container">
        {series.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            year={item.year}
            image={item.image}
            episodes={item.episodes}
            synopsis={item.synopsis}
          />
        ))}
      </div>
    </div>
  );
};

export default SeriesList;
