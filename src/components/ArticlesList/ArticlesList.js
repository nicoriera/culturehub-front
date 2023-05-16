import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/articles');
        if (!response.ok) {
          throw new Error('Error fetching articles');
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

  const userLanguage = navigator.language || navigator.userLanguage;

  return (
    <>
      <ul className="container">
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>
              <div className="list-items">
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <p>{new Date(article.createdAt).toLocaleString(userLanguage, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ArticlesList