import { ReactNode } from 'react'
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getMovies, getMovieByImdb } from "../../api/movies";
import { mockSearch } from "../../__fixtures__/search";
import { mockMovieDetails } from "../../__fixtures__/movieDetails";
import { useMovies, useMovieDetails } from "./useMovies";

jest.mock("../../api/movies", () => ({
    getMovies: jest.fn(),
    getMovieByImdb: jest.fn()
}));

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false
        }
    }
});
interface Props {
    children?: ReactNode
}
const wrapper = ({ children }: Props) => (
    <QueryClientProvider client={queryClient}> {children} </ QueryClientProvider >
);

describe("useMovies", () => {
    test("Should return data for successful query", async () => {
        getMovies.mockImplementation(() => mockSearch);
        const { result } = renderHook(() => useMovies('test'), { wrapper });
        await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
        expect(result.current.data).toEqual(mockSearch);
    });
});

describe("useMovieDetails", () => {
    test("Should return data for successful query", async () => {
        getMovieByImdb.mockImplementation(() => mockMovieDetails);
        const { result } = renderHook(() => useMovieDetails('test'), { wrapper });
        await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
        expect(result.current.data).toEqual(mockMovieDetails);
    });
});