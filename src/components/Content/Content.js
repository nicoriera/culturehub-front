import React, { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard";

const Content = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/articles");
        if (!response.ok) {
          throw new Error("Error fetching articles");
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1>Listes</h1>
      <ul className="container">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </ul>
    </>
  );
};

export default Content;
