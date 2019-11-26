import React from "react";
import ReactDOM from "react-dom";
import One from "./One";
import { PlayerContext, player } from "./Context";

const App = () => {
    return (
        <div>
            <h1>hello hooks</h1>
            <PlayerContext.Provider value={player}>
                <One />
            </PlayerContext.Provider>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
