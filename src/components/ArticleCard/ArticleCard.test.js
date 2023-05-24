import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ArticleCard from "./ArticleCard";

test("renders article details", () => {
  const mockArticle = {
    id: "1",
    title: "Test title",
    description: "Test description",
    createdAt: "2023-05-24T00:00:00.000Z",
    typeId: "1",
    author: "Test author",
    image: "test-image.jpg",
  };

  render(
    <Router>
      <ArticleCard article={mockArticle} />
    </Router>
  );

  expect(screen.getByText(/Test title/i)).toBeInTheDocument();
  expect(screen.getByText(/Test description/i)).toBeInTheDocument();
  expect(screen.getByRole("img", { name: /test-image.jpg/i })).toHaveAttribute(
    "src",
    "test-image.jpg"
  );

  const dateElement = screen.getByText(/May 24, 2023/i);
  expect(dateElement).toBeInTheDocument();

  const authorElement = screen.getByText(/Test author/i);
  expect(authorElement).toBeInTheDocument();
});
