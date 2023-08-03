import { render } from "@testing-library/react";
import Home from "./Home";

it("renders the Home without crashing", () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId("home")).toBeInTheDocument();
});