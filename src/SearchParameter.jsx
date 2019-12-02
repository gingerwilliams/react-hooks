import React, { useState } from "react";

const SearchParams = () => {
    //const location = "Seattle, WA";
    const [location, setLocation] = useState("Seattle, WA");

    return (
        <div className='search-params'>
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
