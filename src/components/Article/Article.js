import React from "react";
import { Link } from "react-router-dom";

const Article = ({ article }) => {
  if (!article) return null;

  const { body, title, description, createdAt, image } = article;

  const userLanguage = navigator.language || navigator.userLanguage;
  const formattedDate = new Date(createdAt).toLocaleString(userLanguage, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="article-page">
        <div>
          <h1>{title}</h1>
          <img src={image} alt={title} />
        </div>
        <div>
          <p>{description}</p>
          <p>{body}</p>
          <p>{formattedDate}</p>
        </div>
        {/* <Link to={`/articles`}>
          <button>Back</button>
        </Link> */}
      </div>
    </>
  );
};

export default Article;
