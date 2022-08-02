import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import { ACTIONS } from "../../reducers/booksReducer";
import { BookItemContainer } from "./book-item.styled";

function BookItem({ book }) {
    const { dispatch } = useContext(BooksContext);

    const deleteBook = (id) => {
        const action = { 
            type: ACTIONS.REMOVE_BOOK, 
            payload: id 
        }
        dispatch(action);
    }

    return(
        <BookItemContainer onClick={() => deleteBook(book.id)}>
            <div>{book.title}</div>
            <div>{book.author}</div>
        </BookItemContainer>
    )
}

export default BookItem;