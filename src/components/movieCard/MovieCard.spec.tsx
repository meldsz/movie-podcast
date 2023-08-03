import { render } from "@testing-library/react";
import MovieCard, { MovieCardProps } from "./MovieCard";
import { mockMovieDetails } from "../../__fixtures__/movieDetails";

const props: MovieCardProps = {
    showMovieDetails() {
        return;
    },
    movie: mockMovieDetails
};

it("renders the MovieCard without crashing", () => {
    const { getByTestId } = render(<MovieCard  {...props} />);
    expect(getByTestId("movieCard")).toBeInTheDocument();
});