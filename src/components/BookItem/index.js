import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import { ACTIONS } from "../../reducers/booksReducer";
import { BookItemContainer, IconContainer, TextContainer } from "./book-item.styled";

function BookItem({ book }) {
    const { dispatch } = useContext(BooksContext);

    const deleteBook = (id) => {
        const action = {
            type: ACTIONS.REMOVE_BOOK,
            payload: id
        }
        dispatch(action);
    }

    const updateBook = (id) => {
        const action = {
            type: ACTIONS.UPDATE_BOOK,
            payload: id
        }
        dispatch(action);
    }

    return (
        <BookItemContainer>
            <TextContainer isRead={book.isRead}>
                <div>{book.title}</div>
                <div>{book.author}</div>
            </TextContainer>
            <IconContainer>
                <ion-icon 
                    name="checkmark-circle-outline" 
                    size="large" 
                    id="check"
                    onClick={() => updateBook(book.id)}
                />
                <ion-icon 
                    name="close-circle-outline" 
                    size="large" 
                    id="cross"
                    onClick={() => deleteBook(book.id)}
                />
            </IconContainer>
        </BookItemContainer>
    )
}

export default BookItem;