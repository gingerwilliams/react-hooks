import React from "react";
import ReactDOM from "react-dom";
import State from "./State";

const App = () => {
    return (
        <div>
            <h1>hello hooks</h1>
            <State />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
