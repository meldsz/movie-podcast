import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("renders the Header without crashing", () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId("header")).toBeInTheDocument();
  expect(screen.getByText("Mel's Movie Podcast")).toBeInTheDocument();
});