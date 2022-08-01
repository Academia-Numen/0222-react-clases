export const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrementar',
    RESET: 'reset',
}

export default function counterReducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return state + parseFloat(action.payload);
        case ACTIONS.DECREMENT:
            return state - parseFloat(action.payload);
        case ACTIONS.RESET:
            return 0;
        default:
            return state;
    }
}