import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Article from "./Article";

test("renders article", () => {
  const mockArticle = {
    body: "Test body",
    title: "Test title",
    author: "Test author",
    description: "Test description",
    createdAt: "2023-05-24T00:00:00.000Z",
    image: "test-image.jpg",
  };

  render(<Article article={mockArticle} />);

  expect(screen.getByText(/Test title/i)).toBeInTheDocument();
  expect(screen.getByText(/Test description/i)).toBeInTheDocument();
  expect(screen.getByText(/Test body/i)).toBeInTheDocument();
  expect(screen.getByText(/Test author/i)).toBeInTheDocument();
  expect(screen.getByRole("img", { name: /Test title/i })).toHaveAttribute(
    "src",
    "test-image.jpg"
  );

  const dateElement = screen.getByText(/May 24, 2023/i);
  expect(dateElement).toBeInTheDocument();
});
