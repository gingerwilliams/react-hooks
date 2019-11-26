import React, { useState } from "react";

const State = () => {
    const [isGreen, setIsGreen] = useState(true);
    return (
        <h2
            onClick={() => setIsGreen(!isGreen)}
            style={{ color: isGreen ? "green" : "red" }}>
            single useState
        </h2>
    );
};

export default State;
