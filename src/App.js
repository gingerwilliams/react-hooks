import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParameter";

const App = () => {
    return (
        <div>
            <h1 id='something-important'>Find Food</h1>
            <SearchParams />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

//WES BOS
// console.log("about to 🐕");
// const wes = fetch("https://wesbos.com/wp-json/wp/v2/posts");

// wes.then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.error("error!!!: ", err));

// console.log("done!");

//creating a promise
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(Error("Wes is so not cool"));
//     }, 1000);
// }); //object

// p.then(data => console.log("my promise: ", data)).catch(err =>
//     console.error("my promise error: ", err)
// );
