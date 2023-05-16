import React from 'react'

const Article = ({article}) => {
    if (!article) return null;
    
    const { body, title, description, createdAt } = article;

  const userLanguage = navigator.language || navigator.userLanguage;
  const formattedDate = new Date(createdAt).toLocaleString(userLanguage, { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{body}</p>
      <p>{formattedDate}</p>
    </div>
  )
}

export default Article
