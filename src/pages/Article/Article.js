import data from "../../data/data.json";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();

  const userLanguage = navigator.language || navigator.userLanguage;
  const article = data.filter((article) => article.id === parseInt(id))[0];

  const formattedDate = new Date(article.createdAt).toLocaleString(
    userLanguage,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <>
      <div className="article-page-container">
        <div>
          <h1>{article.title}</h1>
          <img src={article.image} alt={article.title} />
        </div>
        <div>
          <div className="column-container">
            <p>{article.body}</p>
          </div>
          <p>{formattedDate}</p>
          <p>{article.author}</p>
        </div>
      </div>
    </>
  );
};

export default Article;
