import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount((prevState) => prevState += 1)
    }
    const decrement = () => {
        setCount((prevState) => prevState -= 1)
    }
    return (
        <div className={classes.but}>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

