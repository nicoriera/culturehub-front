import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const formatDate = (dateString) => {
  const userLanguage = navigator.language || navigator.userLanguage;
  return new Date(dateString).toLocaleString(userLanguage, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getTypeName = (typeId, types) => {
  const type = types.find((item) => item.id === typeId);
  return type ? type.name : "Unknown Type";
};

const ArticleCard = ({ article }) => {
  const { id, title, description, createdAt, typeId, author, image } = article;
  const formattedDate = formatDate(createdAt);
  const [transform, setTransform] = useState("");
  const [typeName, setTypeName] = useState("");

  const handleMouseMove = (e) => {
    const cardRect = e.currentTarget.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;
    const deltaX = e.clientX - cardCenterX;
    const deltaY = e.clientY - cardCenterY;
    const rotateX = (deltaY / cardCenterY) * 5;
    const rotateY = (deltaX / cardCenterX) * 5;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  useEffect(() => {
    // Effectuez ici la récupération du nom du type à partir du backend

    const fetchTypeName = async () => {
      try {
        const response = await fetch(`http://localhost:3000/types`);
        const data = await response.json();
        const typeName = getTypeName(typeId, data);
        setTypeName(typeName);
      } catch (error) {
        console.log("Erreur lors de la récupération du nom du type :", error);
      }
    };

    fetchTypeName();
  }, [typeId]);

  return (
    <li>
      <Link to={`/articles/${id}`}>
        <div
          className="article card"
          style={{ transform }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <span>{typeName}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <img className="article image" src={image} alt={image} />
          <div className="article info">
            <span>{formattedDate}</span>
            <span>{author}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ArticleCard;
