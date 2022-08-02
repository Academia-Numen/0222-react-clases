import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import BookItem from "../BookItem";
import { BooksContainer, BooksUnorderedList } from "./books-list.styled";

const BooksList = () => {
   const { books } = useContext(BooksContext);
   const { themeStyles } = useContext(ThemeContext);

    return (
        <BooksContainer themeStyles={themeStyles}>
            <BooksUnorderedList>
            { books.map(book => (
                <BookItem key={book.id} book={book} />
            )) }
            </BooksUnorderedList>
        </BooksContainer>
    )
}

export default BooksList;
