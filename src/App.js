
import React, { useState, useEffect } from 'react';
import './App.scss';
import Button from './components/Button';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h1 className="main-title">{article.title}</h1>
            <p>{article.body}</p>
          </li>
        )
        )}
        </ul>
        <Button label="Valider"></Button>
        <Button label="Supprimer"></Button>

    </>
  );
}

export default App;
