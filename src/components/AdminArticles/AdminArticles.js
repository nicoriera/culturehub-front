import React, { useState, useEffect } from "react";
import axios from "axios";
import TableRow from "../TableRow";

const AdminArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Récupérer la liste des articles depuis l'API
    axios
      .get("/api/articles")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      axios
        .delete(`/api/articles/${id}`)
        .then(() => {
          setArticles(articles.filter((article) => article.id !== id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <h2>Gestion des Articles</h2>
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Date de publication</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <TableRow
              key={article.id}
              article={article}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminArticles;
