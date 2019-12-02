import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import { useDropdown } from "./hooks/use-dropdown";

const SearchParams = () => {
    //const location = "Seattle, WA";

    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]); //breeds will update
    // const [animal, setAnimal] = useState("dog");
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    // const [breed, setBreed] = useState("");
    const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

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
                <AnimalDropdown />
                <BreedDropdown />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
