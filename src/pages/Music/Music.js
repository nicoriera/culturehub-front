import React from "react";
import data from "../../data/data.json";
import ArticleCard from "../../components/ArticleCard";

const MusicPage = () => {
  // Filtrer les articles qui ont le typeId correspondant à "Cinéma"
  const musicArticles = data.filter((article) => article.typeId === 4); // Remplacez 1 par le typeId correspondant à "Cinéma"
  console.log(musicArticles);

  if (musicArticles.length === 0) {
    return <h1>Article en cours d'écriture</h1>;
  } else {
    return (
      <div>
        <h1>Musique</h1>
        <ul className="container">
          {musicArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </ul>
      </div>
    );
  }
};

export default MusicPage;
