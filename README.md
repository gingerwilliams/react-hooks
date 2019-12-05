# react-hooks

React Hooks Boilerplate with Context and Parcel

## Tools

-   Parcel
-   Reach-Router

## Scripts

dev mock: cross-env to run offline

## Hooks Best Practices

-   Hooks cannot be used in control flow statements
-   They must be in the same order every time
-   Never put a hook inside of an if statement
-   Never put a hook inside of a loop

## useState

-   array of two
-   [state name, function to update state] = useState(initialState)

## useEffect

-   Takes the place of several lifecycle methods
    -   componentDidMount
    -   componentWillUnmount
    -   componentDidUpdate
-   !Makes the component re-render

1.  start with useState const [time, setTime] = useState(new Date());
2.  then useEffect, pass a function as the parameter
3.  useEffect(() => {})
4.  useEffect(() => {}, []) add an empty array so it returns on mount not on rerender. and doesn't keep rendering and calling forever and breaking
5.  inside that function run the function to update state
6.  useEffect(() => {const time = setTime()})

## useContext - Application Level State (Redux)

-   createContext({}) takes an object `export const PlayerContext = createContext({})`
-   wrap the app in the provider <PlayerContext.Provider value={player}><One /></PlayerContext.Provider>
-   import {player} from state
-   in the component `import { PlayerContext } from "./Context";`
-   `const player = useContext(PlayerContext);`
-   `return player.firstname`

## ESLint for Hooks

-   `npm i -D eslint-plugin-react-hooks`
-   `rules: { "react-hooks/rules-of-hooks": 2, "react-hooks/exhaustive-deps": 1,}`
-   `0` to turn off, `1` is to warn and `2` is to error
-   `plugings: [ "react-hooks" ]`
-   look up exact `eslint`... not working
-   select onChange must have onBlur for tabbing through (A11y)

! input - two way data binding is not free

### Extras

## Promises

-   Promises: something that will happen in the future
-   creating a promise
    -   const p = new Promise() //object: Promise constructor
    -   const p = new Promise((resolve, reject) => { })
-   Error! - Uncaught (in promise) : means error not in catch()
-   reject(Error("Wes is so not cool")); : wrap message in Error() to see where it broke
