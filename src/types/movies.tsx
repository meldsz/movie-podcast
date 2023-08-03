export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    Plot: string;
    Released: string;
    review: string;
}

export interface SearchMovie {
    Poster: string;
    Title: string;
    Year: string;
    Type: string;
    imdbID?: string
}


export interface Rating {
    [key: string]: string;
}

export interface MovieData {
    Runtime: string;
    Actors: string;
    Director: string;
    Genre: string;
    Plot: string;
    Poster: string;
    Released: string;
    Title: string;
    Type: string;
    imdbID: string;
    Language: string;
    Ratings: Rating[];
}