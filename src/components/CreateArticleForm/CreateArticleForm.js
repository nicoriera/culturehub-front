import React, { useState } from "react";

const CreateArticleForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dans la fonction handleSubmit()
    const response = await fetch("https://your-api.com/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    if (response.ok) {
      // La requête a réussi
      const article = await response.json();
      console.log("Article créé avec succès: ", article);
    } else {
      // La requête a échoué
      console.error("Erreur lors de la création de l'article: ", response);
    }
    // Dans la fonction handleSubmit()
    try {
      const response = await fetch(/* ... */);

      if (!response.ok) {
        throw new Error(
          `Erreur lors de la création de l'article: ${response.status}`
        );
      }

      const article = await response.json();
      console.log("Article créé avec succès: ", article);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Titre:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Contenu:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </label>
      <input type="submit" value="Publier" />
    </form>
  );
};

export default CreateArticleForm;
