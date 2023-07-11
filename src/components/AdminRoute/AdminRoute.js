import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./authContext"; // un contexte d'authentification qui maintient l'état d'authentification

const AdminRoute = ({ element, ...rest }) => {
  const { user } = useAuth(); // récupère l'utilisateur connecté

  return user && user.role === "admin" ? ( // vérifie si l'utilisateur est un administrateur
    <Route {...rest} element={element} /> // si oui, rend la route normalement
  ) : (
    <Navigate to="/login" />
  ); // sinon, redirige vers la page de connexion
};

export default AdminRoute;
