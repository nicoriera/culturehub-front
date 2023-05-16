import React from 'react';
import { Link } from 'react-router-dom';

const formatDate = (dateString) => {
  const userLanguage = navigator.language || navigator.userLanguage;
  return new Date(dateString).toLocaleString(userLanguage, { year: 'numeric', month: 'long', day: 'numeric' });
};

const ArticleCard = ({ article }) => {
  const { id, title, description, createdAt } = article;
  const formattedDate = formatDate(createdAt);


  return (
    <li>
      <Link to={`/articles/${id}`}>
        <div className="list-items">
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{formattedDate}</p>
        </div>
      </Link>
    </li>
  );
};

export default ArticleCard;
