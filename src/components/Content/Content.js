import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
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

  return (
    <>
      <h1>Articles</h1>
      <ul className="container">
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>
              <div className="list-items">
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <p>{article.createdAt}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Content;
