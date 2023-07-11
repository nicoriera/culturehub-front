import React, { useState } from "react";
import axios from "axios";

const CreateArticleForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("news");
  const [tags, setTags] = useState([]);

  const [isPending, setIsPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsPending(true);
    setErrorMessage("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);
    formData.append("author", author);
    formData.append("category", category);
    formData.append("tags", JSON.stringify(tags));

    try {
      await axios.post("https://your-api.com/articles", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Article créé avec succès");
      setIsPending(false);
      // Réinitialisation des champs après la soumission réussie
      setTitle("");
      setContent("");
      setImage(null);
      setAuthor("");
      setCategory("news");
      setTags([]);
    } catch (error) {
      console.error(error);
      setErrorMessage("Erreur lors de la création de l'article.");
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
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </label>
      <label>
        Tags:
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value.split(","))}
          placeholder="Séparez les tags par des virgules"
          required
        />
      </label>
      <div className="error-message">{errorMessage}</div>
      <button type="submit" disabled={isPending}>
        {isPending ? "En cours..." : "Publier"}
      </button>
    </form>
  );
};

export default CreateArticleForm;
