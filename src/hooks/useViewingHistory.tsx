import { MovieData } from "../types/movies"

const setViewingHistory = (imdbID: string, newReview: string, prevReview: string, movie: MovieData) => {
    const history = getViewingHistory()
    const movieIndx = history.findIndex((item: MovieData) => item.imdbID === imdbID)
    movieIndx !== -1 ?
        history[movieIndx] = { ...history[movieIndx], review: newReview } :
        history.push({ ...movie, review: newReview || prevReview })
    localStorage.setItem('history', JSON.stringify({ history }))
    window.dispatchEvent(new Event('storage'))
}
const getViewingHistory = () => (JSON.parse(localStorage.getItem('history') || '{"history":[]}')).history

export const useViewingHistory = () => ({
    getViewingHistory,
    setViewingHistory
})