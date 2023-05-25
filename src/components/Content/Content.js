import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import unidecode from "unidecode";

const Content = () => {
  const tiles = [
    "News",
    "Musique",
    "Cinéma",
    "Série",
    "Jeux Vidéo",
    "High Tech",
  ];

  const initialTransformState = tiles.reduce((acc, tile) => {
    acc[tile] = "";
    return acc;
  }, {});

  const [transform, setTransform] = useState(initialTransformState);

  const formatTitle = (title) => {
    // Supprimer les accents
    const titleWithoutAccents = unidecode(title);
    // Convertir en minuscules
    const lowercaseTitle = titleWithoutAccents.toLowerCase();
    return lowercaseTitle;
  };

  const formattedTiles = tiles.map((tile) => formatTitle(tile));

  const handleMouseMove = useCallback(
    (tile) => (e) => {
      const cardRect = e.currentTarget.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      const deltaX = e.clientX - cardCenterX;
      const deltaY = e.clientY - cardCenterY;
      const rotateX = (deltaY / cardCenterY) * 50;
      const rotateY = (deltaX / cardCenterX) * 50;

      setTransform((prev) => ({
        ...prev,
        [tile]: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }));
    },
    []
  );

  const handleMouseLeave = useCallback(
    (tile) => () => {
      setTransform((prev) => ({
        ...prev,
        [tile]: "",
      }));
    },
    []
  );

  return (
    <div>
      <div className="container-title">
        <h1 className="content big-title animated-text">
          Toute vos Actus.
          <br />
          Au même endroit.
        </h1>
        <h2>
          Des critiques de films. Des analyses de séries captivantes. Vos
          dernières nouvelles musicales en détail. La couverture la plus
          complète des jeux vidéo innovants. Et la plus grande collection
          d'articles sur le high-tech. Tout ce que vous cherchez en matière de
          divertissement et de technologie est ici. Découvrez-le exclusivement
          sur HouseCo.
        </h2>
      </div>
      <div className="container-tiles">
        <div className="tiles">
          {formattedTiles.map((tile) => (
            <Link to={`/articles/${tile.replace(" ", "")}`} key={tile}>
              <div
                key={tile}
                className={`tile ${tile.replace(" ", "")}`}
                style={{
                  transform: transform[tile],
                }}
                onMouseMove={handleMouseMove(tile)}
                onMouseLeave={handleMouseLeave(tile)}
              >
                <h1>{tile}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <section className="container-articles">
        <p></p>
      </section>
    </div>
  );
};

export default Content;
