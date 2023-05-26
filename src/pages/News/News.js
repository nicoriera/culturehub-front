import React from "react";
import data from "../../data/data.json";
import ArticleCard from "../../components/ArticleCard";

const NewsPage = () => {
  // Filtrer les articles qui ont le typeId correspondant à "Cinéma"

  if (data.length === 0) {
    return <h1>Article en cours d'écriture</h1>;
  } else {
    return (
      <div>
        <h1>Cinéma</h1>
        <ul>
          {data.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </ul>
      </div>
    );
  }
};

export default NewsPage;
