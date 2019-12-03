import React, { useState, useEffect } from "react";
// import pet, { ANIMALS } from "@frontendmasters/pet";
import { useDropdown } from "./hooks/use-dropdown";
import { API_KEY_CMC } from "../config_keys";

const SearchParams = () => {
    // const cryptocurrency = "Bitcoin";

    const [cryptocurrency, setCryptocurrency] = useState("Bitcoin"); //rerenders
    // const [breeds, setBreeds] = useState([]); //breeds will update
    // const [animal, setAnimal] = useState("dog");
    // const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    // const [breed, setBreed] = useState("");
    // const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

    //Schedules this effect to run. render ui first
    useEffect(() => {
        //pet.breeds("dogs").then(console.log, console.error);
        const url = `https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${API_KEY_CMC}`;
        fetch(url).then(console.log, console.error);
    });

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
                            setCryptocurrency(event.target.value); //rerenders and pulls api every letter!!!!
                        }}
                        placeholder='cryptocurrency'
                    />
                </label>
                {/* <AnimalDropdown /> */}
                {/* <BreedDropdown /> */}
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
