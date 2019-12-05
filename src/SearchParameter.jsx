import React, { useState, useEffect } from "react";
// import pet, { ANIMALS } from "@frontendmasters/pet";
import { useDropdown } from "./hooks/use-dropdown";
// import { list, info } from "./endpoints/endpoints";

const list = "./data/listings.json";
const info = "./data/info.json";

const SearchParams = () => {
    // const cryptocurrency = "Bitcoin";

    const [cryptocurrency, setCryptocurrency] = useState("Bitcoin"); //rerenders
    const [coins, setCoins] = useState({});

    // const [breeds, setBreeds] = useState([]); //breeds will update
    // const [animal, setAnimal] = useState("dog");
    // const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    // const [breed, setBreed] = useState("");
    // const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

    //Schedules this effect to run. render ui first
    useEffect(() => {
        //pet.breeds("dogs").then(console.log, console.error);

        // fetch(list).then(console.log, console.error);
        fetch(list, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                setCoins(data.data);
            })
            .catch(err => console.log("error: ", err));
    }, []); // make sure to put the empty array as the second arg

    const [coin, CoinDropdown] = useDropdown(
        "CryptoCurrency",
        "Choose Coin",
        coins
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
