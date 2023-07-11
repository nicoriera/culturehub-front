import React from "react";

const TableRow = ({ article, handleDelete }) => {
  const { id, title, author, createdAt } = article;

  return article.length === 0 ? (
    <p>"Pas d'article"</p>
  ) : (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{createdAt}</td>
      <td>
        <button>Edit</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
