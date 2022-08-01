import { useState } from "react";
import { useReducer } from "react"
import counterReducer, { ACTIONS } from "../../reducers/counterReducer";

export default function Counter() {
    const [count, dispatch] = useReducer(counterReducer, 0);
    const [value, setValue] = useState('');

    return(
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <span>Contador: {count}</span>
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT, payload: value })}>+</button>
            <button onClick={() => dispatch({ type: ACTIONS.DECREMENT, payload: value })}>-</button>
            <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
        </div>
    )
}