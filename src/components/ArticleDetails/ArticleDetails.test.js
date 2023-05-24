import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ArticleDetails from "./ArticleDetails";

test("renders article details", async () => {
  const mockArticle = {
    body: "Test body",
    title: "Test title",
    description: "Test description",
    createdAt: "2023-05-24T00:00:00.000Z",
    image: "test-image.jpg",
  };

  jest.spyOn(global, "fetch").mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue(mockArticle),
  });

  render(
    <MemoryRouter initialEntries={["/articles/1"]}>
      <Routes>
        <Route path="/articles/:id" element={<ArticleDetails />} />
      </Routes>
    </MemoryRouter>
  );

  // Attendre que l'article soit rendu
  const titleElement = await screen.findByText(/Test title/i);
  expect(titleElement).toBeInTheDocument();

  // Nettoyer le mock pour éviter les interférences avec d'autres tests
  global.fetch.mockRestore();
});
