import { Box, Stack } from "@mui/material"
import { SearchMovie } from "../../types/movies"

const movieItemStyle = { '& > img': { mr: 2, flexShrink: 0 } }

const MovieItem = ({ movie, ...restProps }: { movie: SearchMovie }) => {
    const { Poster, Title, Type, Year } = movie
    return (
        < Box component="li" sx={movieItemStyle} {...restProps}>
            <img
                loading="lazy"
                width="50"
                src={Poster}
                alt={Title}

            />
            <Stack>
                <Box>{Title} - {Year}</Box>
                <Box>{Type}</Box>
            </Stack>
        </Box >
    )
}

export default MovieItem