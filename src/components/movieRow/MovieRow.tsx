import {
    Typography,
    Stack
} from "@mui/material";
import MoviesList from "../moviesList/MoviesList";
import { Movie } from "../../types/movies";
export interface MovieRowProps {
    rowTitle: string;
    movies: Movie[];
}
const MovieRow = ({ rowTitle, movies }: MovieRowProps) => {
    return (
        <Stack>
            <Typography variant="h5">{rowTitle}</Typography>
            <MoviesList movies={movies} />
        </Stack>)
}

export default MovieRow