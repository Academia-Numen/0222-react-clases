import { createContext } from "react";
import useLocalStorage from "../hooks/useLocaStorage";
import booksReducer from "../reducers/booksReducer";

export const BooksContext = createContext();

const initialState = [
    { author: 'George Orwell', title: '1984', id: 1, isRead: false },
    { author: 'Julio Cortazar', title: 'Rayuela', id: 2, isRead: false },
    { author: 'J. K. Rowling', title: 'Harry Potter y el Prisionero de Askaban', id: 3, isRead: false },
    { author: 'Sun Tzu', title: 'El Arte de la Guerra', id: 4, isRead: false },
];

const BooksContextProvider = (props) => {
    const { data: books, dispatch } = useLocalStorage(booksReducer, initialState, 'books');

    return (
        <BooksContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BooksContext.Provider>
    )
}

export default BooksContextProvider;