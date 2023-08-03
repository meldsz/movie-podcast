import { Modal, Box } from "@mui/material"
import { useMovieDetails } from "../../hooks/useMovies/useMovies";
import MovieDetails from "../movieDetails/MovieDetails";
import Loading from "../shared/Loading";
import ErrorMessage from "../shared/ErrorMessage";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface MovieModalProps {
    imdbID: string;
    review?: string;
    open: boolean;
    handleClose: () => void;
};

const MovieModal = ({ handleClose, open, review = '', imdbID }: MovieModalProps) => {
    const { data, isError, isLoading } = useMovieDetails(imdbID)
    if (isLoading) {
        return <Loading />
    }
    if (isError) {
        return <ErrorMessage />
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                {data ? <MovieDetails details={data} review={review} closeModal={handleClose} /> : null}
            </Box>
        </Modal>
    )
}

export default MovieModal;