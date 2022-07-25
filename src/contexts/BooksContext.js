import { createContext, useState } from "react";

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: '1984', id: 1 },
        { title: 'Rayuela', id: 2 },
        { title: 'Harry Potter y el Prisionero de Askaban', id: 3 },
        { title: 'El Arte de la Guerra', id: 4 },
      ]);
    
    return (
        <BooksContext.Provider value={books}>
            { props.children }
        </BooksContext.Provider>
    )
}

export default BooksContextProvider;