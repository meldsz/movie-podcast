import { useReducer } from 'react'

interface SearchAction {
    type: string;
    payload: string;
}
interface SearchState {
    search: string;
    selected: string;
    inputValue: string;
}
const reducer = (state: SearchState, action: SearchAction) => {
    switch (action.type) {
        case 'SEARCH':
            return { ...state, search: action.payload };
        case 'SELECT':
            return { ...state, selected: action.payload };
        case 'INPUT':
            return { ...state, inputValue: action.payload };
        default:
            throw new Error();
    }
}
const initialState = {
    search: '',
    selected: '',
    inputValue: ''
}

export const useSearch = () => useReducer(reducer, initialState);