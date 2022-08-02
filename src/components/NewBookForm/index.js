import { useState } from "react";
import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ACTIONS } from "../../reducers/booksReducer";
import { FormContainer, InputField } from "./new-book-form.styled";

function generateId(books){
    const id = Math.max(0, ...books.map(book => book.id)) + 1;
    return id;
}

const NewBookForm = () => {
    const { themeStyles } = useContext(ThemeContext);
    const { books, dispatch } = useContext(BooksContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const newBook = { author: author, title: title, id: generateId(books)};
        dispatch({ type: ACTIONS.ADD_BOOK, payload: newBook });
        setTitle('');
        setAuthor('');
    }

    return (
        <FormContainer 
            themeStyles={themeStyles}
            onSubmit={handleSubmit}
        >
            <InputField
                type="text"
                placeholder="book title"
                required
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <InputField
                type="text"
                placeholder="book author"
                required
                value={author}
                onChange={e => setAuthor(e.target.value)}
            />
            <InputField
                type="submit"
            />
        </FormContainer>
    )
}

export default NewBookForm;