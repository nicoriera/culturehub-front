import React from "react";
import data from "../../data/data.json";
import ArticleCard from "../../components/ArticleCard";

const HighTechPage = () => {
  // Filtrer les articles qui ont le typeId correspondant à "Cinéma"
  const hightechArticles = data.filter((article) => article.typeId === 11); // Remplacez 1 par le typeId correspondant à "Cinéma"

  if (hightechArticles.length === 0) {
    return <h1>Article en cours d'écriture</h1>;
  } else {
    return (
      <div>
        <h1>High Tech</h1>
        <ul className="container">
          {hightechArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </ul>
      </div>
    );
  }
};

export default HighTechPage;
