import React from 'react'
import { useParams } from 'react-router-dom';

const Article = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === Number(id));

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
    </div>
  )
}

export default Article
