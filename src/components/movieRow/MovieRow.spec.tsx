import { render } from "@testing-library/react";
import MovieRow, { MovieRowProps } from "./MovieRow";
import { mockMovieDetails } from "../../__fixtures__/movieDetails";
const props: MovieRowProps = {
  movies: [mockMovieDetails],
  rowTitle: 'Viwing History'
};
it("renders the MovieRow without crashing", () => {
  const { getByTestId } = render(<MovieRow {...props} />);
  expect(getByTestId("home")).toBeInTheDocument();
});