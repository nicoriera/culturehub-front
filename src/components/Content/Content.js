import React, { useCallback, useState } from "react";

const Content = () => {
  const tiles = [
    "News",
    "Musique",
    "Cinéma",
    "Série",
    "Jeux Vidéos",
    "High Tech",
  ];

  const initialTransformState = tiles.reduce((acc, tile) => {
    acc[tile] = "";
    return acc;
  }, {});

  const [transform, setTransform] = useState(initialTransformState);

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
    <div className="container">
      <div className="container-title">
        <h1 className="conent big-title">
          Toute vos Actus.
          <br />
          Au même endroit.
        </h1>
      </div>
      <div className="container-tiles">
        <div className="tiles">
          {tiles.map((tile) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
