import React, { useState } from 'react';
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div className="counter-container">
            <h1 className="counter-title">Counter: {count}</h1>
            <button onClick={increment} className="button">Increase</button>
            <button onClick={decrement} className="button">Decrease</button>
            <button onClick={reset} className="button">Reset</button>
        </div>
    );
}

export default Counter;
