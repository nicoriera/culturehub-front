import React from "react";
import data from "../../data/data.json";
import ArticleCard from "../../components/ArticleCard";

const VideoGamesPage = () => {
  // Filtrer les articles qui ont le typeId correspondant à "Cinéma"
  const videoGamesArticles = data.filter((article) => article.typeId === 18); // Remplacez 1 par le typeId correspondant à "Cinéma"
  console.log(videoGamesArticles);

  if (videoGamesArticles.length === 0) {
    return <h1>Article en cours d'écriture</h1>;
  } else {
    return (
      <div>
        <h1>Cinéma</h1>
        <ul className="container">
          {videoGamesArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </ul>
      </div>
    );
  }
};

export default VideoGamesPage;
