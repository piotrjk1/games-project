import React, { useState, useEffect } from 'react';

const ClockFunction = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timerID);
        };
    }, []); //pusty array oznacza, że efekt zostanie uruchomiony tylko raz po zamontowaniu

    return(
        <div>
            <h1>Current Time returned by function:
                {date.toLocaleTimeString()}</h1>
        </div>
    );
};

export default ClockFunction;