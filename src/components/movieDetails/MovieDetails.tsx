import { useState } from 'react'
import styled from "@emotion/styled";
import {
    Button,
    TextField,
    Typography,
    Stack
} from "@mui/material";
import { MovieData, Rating } from '../../types/movies';
import { useViewingHistory } from '../../hooks/useViewingHistory'


const DetailsStyled = styled.div`
 display: flex;
 gap: 40px;
`;

const RatingList = ({ ratings }: { ratings: Rating[] }) =>
    ratings.map(rating =>
        <Stack>
            <Typography>{rating?.Source}: {rating?.Value}</Typography>
        </Stack>
    )


interface MovieDetailsProps {
    details: MovieData;
    review: string;
    closeModal: () => void;
}
const MovieDetails = ({ details, review, closeModal }: MovieDetailsProps) => {
    const [myReview, setMyReview] = useState(review)
    const { setViewingHistory } = useViewingHistory()
    const { Runtime, Actors, Director, Genre, Plot, Poster, Released, Title, Type, imdbID, Language, Ratings } = details

    const saveReview = () => {
        setViewingHistory(imdbID, myReview, review, details)
        closeModal()
    }
    return (
        <DetailsStyled>
            <img src={Poster} width="55%" height="50%" />
            <Stack spacing={2}>
                <Typography variant="h2" component="h2">{Title} </Typography>
                <Typography>Release: {Released}</Typography>
                <Typography>Type: {Type}</Typography>
                <Typography>Runtime: {Runtime}</Typography>
                <Typography> Actors: {Actors}</Typography>
                <Typography> Director: {Director}</Typography>
                <Typography> Genre: {Genre} </Typography>
                <Typography>Language: {Language}</Typography>
                <Typography>Plot: {Plot} </Typography>
                <Typography> Ratings:</Typography>
                <RatingList ratings={Ratings} />
                <TextField
                    label="Review"
                    value={myReview}
                    onChange={(e) => setMyReview(e.target.value)}
                    multiline
                    rows={4} />
                <Stack direction="row" spacing={2} alignItems="flex-end" justifyContent="flex-end">
                    <Button variant="outlined" onClick={closeModal}>CLOSE</Button>
                    <Button variant="outlined" onClick={saveReview}>WATCHED</Button>
                </Stack>
            </Stack>
        </DetailsStyled>
    );
}

export default MovieDetails