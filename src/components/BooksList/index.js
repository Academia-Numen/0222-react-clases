import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { BookItem, BooksContainer, BooksUnorderedList } from "./books-list.styled";

const BooksList = () => {
   const books = useContext(BooksContext);
   const { themeStyles } = useContext(ThemeContext);

    return (
        <BooksContainer themeStyles={themeStyles}>
            <h2>Lista de Libros</h2>
            <BooksUnorderedList>
            { books.map(book => (
                <BookItem key={book.id}> 
                    {book.title} 
                </BookItem>
            )) }
            </BooksUnorderedList>
        </BooksContainer>
    )
}

export default BooksList;
