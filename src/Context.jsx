import React, { createContext } from "react";

// data / store / state
export const player = {
    firstname: "Ginger",
    lastname: "Williams",
    email: "gwilliams123@gmail.com"
};

export const PlayerContext = createContext({}); //<-- create store  | {} reducer initialState
