import React, { useState, useEffect } from "react";

const State = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        //run the function to update the state
        const timer = setTimeout(setTime(new Date()), 1000);
        //D3
        return () => clearTimeout(timer); //clear is the cleanup function for setTimeOut/clearInterval
    });

    return <h2>useEffect: {time.toLocaleTimeString()}</h2>;
};

export default State;
