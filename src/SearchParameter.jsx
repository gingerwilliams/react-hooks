import React, { useState, useEffect, useRef } from "react";
import zipcodes from "zipcodes";
// import pet, { ANIMALS } from "@frontendmasters/pet";
import { useDropdown } from "./hooks/use-dropdown";
import {
    categories,
    cities,
    getCity,
    fetchOptions
} from "./endpoints/endpoints";

// const list = "./data/listings.json";
// const info = "./data/info.json";

const SearchParams = () => {
    const city = useRef("");
    const [location, setLocation] = useState({}); //rerenders

    const handleChange = event => {
        event.preventDefault();

        const target = event.target;
        const value = target.value;
        target.name = value;

        const zip = parseInt(value);
        const geolocation = zipcodes.lookup(zip);

        if (value.length === 5 && geolocation) setLocation(geolocation);

        //rerenders and pulls api every letter!!!!
    };

    const handleSubmit = event => {
        event.preventDefault();
        // location
        console.log("submit");
    };

    console.log(location);

    // const [breeds, setBreeds] = useState([]); //breeds will update
    // const [animal, setAnimal] = useState("dog");
    // const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    // const [breed, setBreed] = useState("");
    // const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

    //Schedules this effect to run. render ui first
    useEffect(() => {
        //pet.breeds("dogs").then(console.log, console.error);

        // fetch(list).then(console.log, console.error);
        fetch(cities, fetchOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log("error: ", err));
    }, []); // make sure to put the empty array as the second arg

    // const [coin, CoinDropdown] = useDropdown(
    //     "CryptoCurrency",
    //     "Choose Coin",
    //     coins
    // );

    return (
        <div className='search-params'>
            <h1>Title</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='location'>
                    Location: {location.city}
                    <input
                        id='location'
                        name='location'
                        ref={city}
                        maxLength='5'
                        onChange={handleChange}
                        placeholder='location'
                    />
                </label>

                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
