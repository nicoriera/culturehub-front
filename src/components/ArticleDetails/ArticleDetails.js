import React from 'react'
import { useParams } from 'react-router-dom';
import {ArticlesList} from '../ArticlesList';

const ArticleDetails = () => {
  const { id } = useParams();
 
  // const article = ArticlesList.find((article) => article.id === parseInt(id));

  // if (!article) {
  //   return <div>Article not found.</div>;
  // }

  return (
    <div>
      {/* <h1>{article.title}</h1>
      <p>{article.description}</p> */}
      <p>Hello {id}</p>
    </div>
  )
}

export default ArticleDetails
