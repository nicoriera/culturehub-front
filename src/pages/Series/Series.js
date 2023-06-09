import React from "react";
import data from "../../data/data.json";
import ArticleCard from "../../components/ArticleCard";

const SeriePage = () => {
  // Filtrer les articles qui ont le typeId correspondant à "Cinéma"
  const serieArticles = data.filter((article) => article.typeId === 8); // Remplacez 1 par le typeId correspondant à "Cinéma"
  console.log(serieArticles);

  if (serieArticles.length === 0) {
    return <h1>Article en cours d'écriture</h1>;
  } else {
    return (
      <div>
        <h1>Séries</h1>
        <ul className="container">
          {serieArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </ul>
      </div>
    );
  }
};

export default SeriePage;
