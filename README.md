# react-hooks

React Hooks Boilerplate with Context and Parcel

## Tools

-   Parcel
-   Reach-Router

## Scripts

dev mock: cross-env to run offline

## Hooks

-   ! hooks cannot be inside of conditionals or loops
-   They must be in the same order every time

## useState

-   array of two
-   [state name, function to update state] = useState(initialState)

## useEffect

-   start with useState const [time, setTime] = useState(new Date());
-   then useEffect, pass a function as the parameter
-   useEffect(() => {})
-   inside that function run the function to update state
-   useEffect(() => {const time = setTime()})

# useContext - Application Level State (Redux)

-   createContext({}) takes an object `export const PlayerContext = createContext({})`
-   wrap the app in the provider <PlayerContext.Provider value={player}><One /></PlayerContext.Provider>
-   import {player} from state
-   in the component `import { PlayerContext } from "./Context";`
-   `const player = useContext(PlayerContext);`
-   `return player.firstname`
