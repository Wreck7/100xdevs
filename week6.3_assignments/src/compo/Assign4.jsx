import { memo, useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assign4() {
    const [count, setCount] = useState(0);

    // Your code starts here
    const handleIncrement = useCallback(() => {
        setCount((c) => c + 1)
    }, [])

    const handleDecrement = useCallback(() => {
        setCount((c) => c - 1)
    }, [])
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

// const CounterButtons = ({ onIncrement, onDecrement }) => (
    // uncomment his to see a significant diff
const CounterButtons = memo(({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onIncrement}>Increment</button>
    </div>
));