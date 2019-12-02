import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParameter";

const App = () => {
    return (
        <div>
            <h1 id='something-important'>Adopt Me</h1>
            <SearchParams />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
