import React, { useState } from "react";

const CreateArticleForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [auteur, setAuteur] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsPending(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);
    formData.append("auteur", auteur);
    formData.append("category", category);
    formData.append("tags", tags);

    try {
      const response = await fetch("https://your-api.com/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(
          `Erreur lors de la création de l'article: ${response.status}`
        );
      }

      const article = await response.json();
      console.log("Article créé avec succès: ", article);
      setIsPending(false);
    } catch (err) {
      console.error(err);
      setIsPending(false);
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
      <label>
        Catégorie:
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="news">News</option>
          <option value="musique">Musique</option>
          <option value="cinema">Cinéma</option>
          <option value="serie">Série</option>
          <option value="jeuxvideo">Jeux vidéo</option>
          <option value="hightech">High Tech</option>
        </select>
      </label>
      <label>
        Image:
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
      </label>
      <label>
        Auteur:
        <input
          type="text"
          value={auteur}
          onChange={(e) => setAuteur(e.target.value)}
          required
        />
      </label>
      <label>
        Tags:
        <select value={tags} onChange={(e) => setTags(e.target.value)} required>
          <option value="news">News</option>
          <option value="musique">Musique</option>
          <option value="cinema">Cinéma</option>
          <option value="serie">Série</option>
          <option value="jeuxvideo">Jeux vidéo</option>
          <option value="hightech">High Tech</option>
        </select>
      </label>
      <input type="submit" value="Publier" disabled={isPending} />
    </form>
  );
};

export default CreateArticleForm;
