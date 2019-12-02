import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
    //const location = "Seattle, WA";

    const [location, setLocation] = useState("Seattle, WA");
    const [animal, setAnimal] = useState("dog");
    const [breed, setBreed] = useState("");
    const [breeds, setBreeds] = useState([]); //breeds will update

    console.log(ANIMALS);

    console.log("state of location: ", location);

    return (
        <div className='search-params'>
            <h1>{location}</h1>
            <form>
                <label htmlFor='location'>
                    Location
                    <input
                        id='location'
                        value={location}
                        onChange={event => {
                            setLocation(event.target.value);
                        }}
                        placeholder='Location'
                    />
                </label>
                <label htmlFor='animal'>
                    Animal
                    <select
                        id='animal'
                        value={animal}
                        onChange={event => setAnimal(e.target.value)}
                        onBlur={event => setAnimal(e.target.value)}>
                        <option>All</option>
                        {ANIMALS.map(animal => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor='breed'>
                    Breed
                    <select
                        id='breed'
                        value={breed}
                        onChange={event => setBreed(e.target.value)}
                        onBlur={event => setBreed(e.target.value)}
                        disabled={!breeds.length}>
                        <option>All</option>
                        {breeds.map(b => (
                            <option key={b}>{b}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
