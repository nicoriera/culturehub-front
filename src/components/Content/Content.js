import React, { useEffect, useState } from "react";
import Tile from "../Tile/Tile";

const tiles = ["News", "Musique", "Cinéma", "Série", "Jeux Vidéo", "High Tech"];

const Content = () => {
  const [appear, setAppear] = useState(false);
  useEffect(() => {
    setAppear(true);
  }, []);
  return (
    <div>
      <div className="container-title">
        <h1 className="content big-title animated-text">
          Toute vos Actus.
          <br />
          Au même endroit.
        </h1>
        {appear && (
          <h2 className="transition">
            Des critiques de films. Des analyses de séries captivantes. Vos
            dernières nouvelles musicales en détail. La couverture la plus
            complète des jeux vidéo innovants. Et la plus grande collection
            d'articles sur le high-tech. Tout ce que vous cherchez en matière de
            divertissement et de technologie est ici. Découvrez-le exclusivement
            sur CultureHub.
          </h2>
        )}
      </div>
      <div className="container-tiles">
        <div className="tiles">
          {tiles.map((tile) => (
            <Tile key={tile} title={tile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
