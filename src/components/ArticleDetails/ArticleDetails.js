import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ArticleDetails = ({ match }) => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`http://localhost:3000/articles/${id}`);
        if (!response.ok) {
          throw new Error('Error fetching article');
        }
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchArticle();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <div>
      {article && (
        <>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <p>{article.body}</p>
          <p>{article.createdAt}</p>
        </>
      )}
    </div>
    
    <Link to={`/articles`}>
      <button>Back</button>
    </Link>
    </>
  );
};

export default ArticleDetails;
