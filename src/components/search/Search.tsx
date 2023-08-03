import { TextField, Autocomplete } from "@mui/material"
import styled from "@emotion/styled";
import { useMovies } from "../../hooks/useMovies/useMovies";
import { useSearch } from "../../hooks/useSearch/useSearch";
import { useModal } from "../../hooks/useModal/useModal";
import MovieModal from "../movieDetails/MovieModal";
import MovieItem from "../movieItem/MovieItem";

const SearchStyled = styled.div`
  width: 90%;
  margin: auto;

  @media (min-width: 768px) {
    width: 50%
  }
`;

const menuOptions = ({ Title, Year }: { Title: string, Year: string, imdbID: string }) => `${Title} (${Year})`

const Search = () => {
    const [state, dispatch] = useSearch()
    const { data, isLoading } = useMovies(state.search)
    const { isModalOpen, openModal, closeModal } = useModal();

    const selectMovie = (imdbID: string) => {
        dispatch({ type: 'SELECT', payload: imdbID })
        openModal()
    };

    const searchMovies = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        dispatch({ type: 'INPUT', payload: e.target.value })
    }
    const keyPress = (e: any) => {
        if (e.keyCode == 13) {
            dispatch({ type: 'SEARCH', payload: e.target.value })
        }
    }

    return (
        <SearchStyled>
            <Autocomplete
                options={data?.Search || []}
                getOptionLabel={menuOptions}
                loading={isLoading}
                onChange={(e, { imdbID }: { imdbID: string }) => selectMovie(imdbID)}
                noOptionsText="No Movies Found"
                sx={{ width: '60%' }}
                renderOption={(props, option: any) =>
                    (<MovieItem {...props} movie={option} />)
                }
                renderInput={(params) => <TextField label="Search Movies" value={state.search} onChange={searchMovies} {...params} onKeyDown={keyPress} />}
            />
            <MovieModal handleClose={closeModal} open={isModalOpen} imdbID={state.selected} />
        </SearchStyled>
    )
}

export default Search