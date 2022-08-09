export const ACTIONS = {
    ADD_BOOK: 'ADD_BOOK',
    REMOVE_BOOK: 'REMOVE_BOOK',
    UPDATE_BOOK: 'UPDATE_BOOK'
}

export default function booksReducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_BOOK:
            return [...state, action.payload];
        case ACTIONS.REMOVE_BOOK:
            return state.filter(book => book.id !== action.payload);
        case ACTIONS.UPDATE_BOOK:
            return state.map(book => {
                if (book.id === action.payload) {
                    const updatedBook = {...book};
                    updatedBook.isRead = !updatedBook.isRead;
                    return updatedBook;
                }
                return book;
            });
        default:
            return state;
    }
}