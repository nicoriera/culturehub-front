import React from 'react'
import { useState, useEffect } from 'react';

const Article = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);
  return (
    <ul className="container">
      {articles.map((article) => (
        <li key={article.id}>
          <div className="summary-list">
            <div className="list-items">
              <h1 className>{article.title}</h1>
              <p>{article.description}</p>
              <p>{article.createdAt}</p>
            </div>
          </div>
        </li>
      )
    )}
  </ul>
  )
}

export default Article
