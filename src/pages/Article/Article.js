import data from "../../data/data.json";
import { useParams } from "react-router-dom";
import ArticleDetails from "../../components/ArticleDetails";

const Article = () => {
  const { id } = useParams();

  const article = data.filter((article) => article.id === parseInt(id))[0];
  console.log(article);
  return (
    <>
      <div className="container">
        <ArticleDetails key={article.id} article={article} />
      </div>
    </>
  );
};

export default Article;
