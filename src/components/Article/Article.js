import React from "react";

const Article = ({ article }) => {
  if (!article) return null;

  const { body, title, description, createdAt, image, author } = article;

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
          <p>{author}</p>
        </div>
      </div>
    </>
  );
};

export default Article;
