import React, { useState, useEffect } from "react";
import axios from "axios";

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
            <tr key={article.id}>
              <td>{article.title}</td>
              <td>{article.author}</td>
              <td>{article.createdAt}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminArticles;
