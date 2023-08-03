const MOVIES_API_URL = `/api/?apiKey=${import.meta.env.VITE_MOVIES_API_KEY}`;

export const getMovies = async (search: string) => {
    const API_URL = `${MOVIES_API_URL}&s=${search}`;
    return Api.GET(API_URL)
};
export const getMovieByImdb = async (imdb: string) => {
    const API_URL = `${MOVIES_API_URL}&i=${imdb}`;
    return Api.GET(API_URL)
};

const Api = {
    GET: async (url: string) => await (
        await fetch(url, {
            method: "GET", headers: { "Content-Type": "application/json" }
        })
    ).json()
}