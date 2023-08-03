import { useQuery } from "@tanstack/react-query";
import { getMovies, getMovieByImdb } from "../../api/movies";

const SEARCH_QUERY_KEY = ["searchMovies"];
const MOVIE_DETAILS_QUERY_KEY = ["movieDetails"];

export const useMovies = (search: string) => {
  const query = useQuery([SEARCH_QUERY_KEY, search], () => getMovies(search), { refetchOnWindowFocus: false, enabled: !!search });
  return {
    ...query,
    isLoading: query.isLoading && query.fetchStatus !== "idle"
  }
};

export const useMovieDetails = (imdbId: string) => {
  const query = useQuery([MOVIE_DETAILS_QUERY_KEY, imdbId], () => getMovieByImdb(imdbId), { refetchOnWindowFocus: false, enabled: !!imdbId });
  return {
    ...query,
    isLoading: query.isLoading && query.fetchStatus !== "idle"
  }
};