import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);
  return (
    <>
    <h1>Articles</h1>
    <ul className="container">
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>
              <div className="summary-list">
                <div className="list-items">
                  <h1 className>{article.title}</h1>
                  <p>{article.description}</p>
                  <p>{article.createdAt}</p>
                </div>
              </div>
            </Link>
          </li>
        )
      )}
    </ul>
  </>
  )
}

export default Content
