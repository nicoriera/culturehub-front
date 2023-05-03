import React, { useState, useEffect } from 'react';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
          </li>
        )
        )}
        </ul>
    </div>
  );
}

export default App;
