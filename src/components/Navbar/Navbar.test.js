import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

test("renders navigation links and toggles menu", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );

  // Vérifier que les liens de navigation sont rendus
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Articles/i)).toBeInTheDocument();
  expect(screen.getByText(/News/i)).toBeInTheDocument();

  // Vérifier que le menu est initialement fermé
  expect(screen.getByRole("button")).toHaveClass("hamburger-button");

  // Simuler un clic sur le bouton du menu
  fireEvent.click(screen.getByRole("button"));

  // Vérifier que le menu est maintenant ouvert
  expect(screen.getByRole("button")).toHaveClass("hamburger-button open");
});
