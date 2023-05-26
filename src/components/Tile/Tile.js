import React from "react";
import { Link } from "react-router-dom";
import unidecode from "unidecode";

const Tile = ({ title }) => {
  const formattedTitle = unidecode(title).toLowerCase();

  return (
    <Link to={`/articles/${formattedTitle.replace(" ", "")}`}>
      <div className={`tile ${formattedTitle.replace(" ", "")}`}>
        <h1>{title}</h1>
      </div>
    </Link>
  );
};

export default Tile;
