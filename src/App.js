import React from "react";
import ReactDOM from "react-dom";
import Effect from "./Effect";

const App = () => {
    return (
        <div>
            <h1>hello hooks</h1>
            <Effect />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
