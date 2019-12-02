import React, { useState } from "react";

const SearchParams = () => {
    //const location = "Seattle, WA";
    if (false) {
        const [location, setLocation] = useState("Seattle, WA");
    }

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
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
