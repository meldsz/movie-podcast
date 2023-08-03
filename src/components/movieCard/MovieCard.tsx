import {
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    Chip,
    Grid,
    Box
} from "@mui/material";
import styled from "@emotion/styled";
import { Movie } from "../../types/movies";

const ChipStyled = styled(Chip)`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: black;
  padding: 0 20px;
`;

export interface MovieCardProps {
    movie: Movie
    showMovieDetails: (movie: object) => void;
}

const MovieCard = ({ movie, showMovieDetails }: MovieCardProps) => {
    const { imdbID, Title, Plot, Released, Poster, Type, review } = movie
    return (
        <Card sx={{ maxWidth: 300, maxHeight: 500, my: 4 }} data-testid="movieCard">
            <CardActionArea onClick={() => showMovieDetails({ imdbID, review })}>
                <ChipStyled
                    variant="outlined"
                    label={Type}
                />
                <CardMedia
                    height="240"
                    component="img"
                    image={Poster}
                    alt={`movie ${Title}`}
                />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Box
                                sx={{
                                    color: "text.primary",
                                    fontSize: 20,
                                    fontWeight: "bold"
                                }}
                            >
                                {Title}
                            </Box>
                        </Grid>
                        <Grid item xs sx={{ textAlign: "right" }}>
                            <Box
                                sx={{
                                    fontSize: 18,
                                    fontWeight: "regular",
                                    lineHeight: 1.5
                                }}
                            >
                                {Released}
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{ pt: 2 }}>
                            {Plot}
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
export default MovieCard