import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(() => 0);

    const sumar = () => setCount((prevState) => prevState + 1);
    const restar = () => setCount((prevState) => prevState - 1);
    const reiniciar = () => setCount(0);

    return (
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={reiniciar}>Reset</button>
        </div>
    )
}
