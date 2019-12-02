import React, { useState } from "react";

export const useDropdown = (label, defaultState, options) => {
    const [state, setState] = useState(defaultState);
    //unique id for key
    //Best Dog Ever: id = use-dropdown-best-dog-ever
    const id = `use-dropdown-${label.replace(" ", "-").toLowerCase()}`;
    const Dropdown = () => (
        <label htmlFor={id}>
            {label}
            <select
                id={id}
                value={state}
                onChange={event => setState(event.target.value)}
                onBlur={event => setState(event.target.value)}
                disabled={!options.length}>
                <option>All</option>
                {options.map(item => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </label>
    );

    return [state, Dropdown, setState];
};
