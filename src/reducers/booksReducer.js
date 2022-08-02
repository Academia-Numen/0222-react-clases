export const ACTIONS = {
    ADD_BOOK: 'ADD_BOOK',
    REMOVE_BOOK: 'REMOVE_BOOK',
}

export default function booksReducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_BOOK:
            return [...state, action.payload];
        case ACTIONS.REMOVE_BOOK:
            return state.filter(book => book.id !== action.payload);
        default:
            return state;
    }
}