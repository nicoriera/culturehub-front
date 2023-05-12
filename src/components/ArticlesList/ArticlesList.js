import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Content = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul className="container">
        {articles.map((article) => (
          <div>
            <li key={article.id} className="list-items">
              <h1>{article.title}</h1>
              <p>{article.description}</p>
              <p>{article.createdAt}</p>
            </li>
          </div>
        )
      )}
  </ul>
  )
}

export default Content