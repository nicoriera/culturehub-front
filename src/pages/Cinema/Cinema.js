import React from "react";
import data from "../../data/data.json";
import ArticleCard from "../../components/ArticleCard";

const CinemaPage = () => {
  // Filtrer les articles qui ont le typeId correspondant à "Cinéma"
  const cinemaArticles = data.filter((article) => article.typeId === 5); // Remplacez 1 par le typeId correspondant à "Cinéma"
  console.log(cinemaArticles);

  if (cinemaArticles.length === 0) {
    return <h1>Article en cours d'écriture</h1>;
  } else {
    return (
      <div>
        <h1>Cinéma</h1>
        <ul>
          {cinemaArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </ul>
      </div>
    );
  }
};

export default CinemaPage;
