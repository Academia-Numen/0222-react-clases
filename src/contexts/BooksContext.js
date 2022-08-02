import { createContext, useReducer } from "react";
import booksReducer from "../reducers/booksReducer";

export const BooksContext = createContext();

const initialState = [
    { author: 'George Orwell', title: '1984', id: 1 },
    { author: 'Julio Cortazar', title: 'Rayuela', id: 2 },
    { author: 'J. K. Rowling', title: 'Harry Potter y el Prisionero de Askaban', id: 3 },
    { author: 'Sun Tzu', title: 'El Arte de la Guerra', id: 4 },
];

const BooksContextProvider = (props) => {
    const [books, dispatch] = useReducer(booksReducer, initialState);

    return (
        <BooksContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BooksContext.Provider>
    )
}

export default BooksContextProvider;