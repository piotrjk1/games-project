import React, { useState, useEffect } from 'react';

const CounterFunction = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Count updated:', count);
    }, [count]); //Hook uruchomi się tylko, gdy count się zmieni

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default CounterFunction;