import React, { useState, useEffect } from "react";
// import pet, { ANIMALS } from "@frontendmasters/pet";
import { useDropdown } from "./hooks/use-dropdown";
// import { list, info } from "./endpoints/endpoints";
import { bungie, fetchOptions } from "./endpoints/endpoints";

const list = "./data/listings.json";
const info = "./data/info.json";

const SearchParams = () => {
    // const cryptocurrency = "Bitcoin";

    const [cryptocurrency, setCryptocurrency] = useState("Bitcoin"); //rerenders
    const [coins, setCoins] = useState({});
    // const [bungie, setBungie] = useState({});

    useEffect(() => {
        fetch(bungie, fetchOptions)
            .then(response => response.json())
            .then(destiny => console.log(destiny))
            .catch(err => console.error(err));
    }, []);

    // const [breeds, setBreeds] = useState([]); //breeds will update
    // const [animal, setAnimal] = useState("dog");
    // const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    // const [breed, setBreed] = useState("");
    // const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

    //Schedules this effect to run. render ui first
    // useEffect(() => {
    //     //pet.breeds("dogs").then(console.log, console.error);

    //     // fetch(list).then(console.log, console.error);
    //     fetch(list, {
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json"
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setCoins(data.data);
    //         })
    //         .catch(err => console.log("error: ", err));
    // }, []); // make sure to put the empty array as the second arg

    const [coin, CoinDropdown] = useDropdown(
        "CryptoCurrency",
        "Choose Coin",
        coins
    );

    //WES BOS
    console.log("about to 🐕");
    const wes = fetch("https://wesbos.com/wp-json/wp/v2/posts");

    wes.then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error("error!!!: ", err));

    console.log("done!");

    //creating a promise
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(Error("Wes is so not cool"));
        }, 1000);
    }); //object

    p.then(data => console.log("my promise: ", data)).catch(err =>
        console.error("my promise error: ", err)
    );

    return (
        <div className='search-params'>
            <h1>{cryptocurrency}</h1>
            <form>
                <label htmlFor='cryptocurrency'>
                    cryptocurrency
                    <input
                        id='cryptocurrency'
                        value={cryptocurrency}
                        onChange={event => {
                            event.preventDefault();
                            setCryptocurrency(event.target.value); //rerenders and pulls api every letter!!!!
                        }}
                        placeholder='cryptocurrency'
                    />
                </label>
                {coins.length > 0 ? (
                    "coin drop" // <CoinDropdown />
                ) : (
                    <div className='loader'>Loading...</div>
                )}

                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
