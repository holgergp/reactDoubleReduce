import {useEffect, useReducer, useState} from 'react'
import papperlapappLogo from './assets/TwitterProfile3x.png'
import './App.css'

enum MyReducerActionKind {
    SOMETHING = 'SOMETHING',
    ANYTHING = 'ANYTHING',
}

interface MyReducerAction {
    type: MyReducerActionKind;
    payload: string;
}

type MyReducerState = {
    foo: string
    bar: string
}
const reducer = (state: MyReducerState, action: MyReducerAction) => {
    switch (action.type) {
        case MyReducerActionKind.SOMETHING:
            console.log("Reducer Action Called")
            return {...state, foo: "something", bar: "something"}
        case MyReducerActionKind.ANYTHING:
            return {...state, foo: "anything", bar: "anything"}
    }
    return state
};

function App() {const [count, setCount] = useState(() => {
        console.log("setState initialized")
    return 0
})

    const [, dispatch] = useReducer(reducer, {foo: "", bar: ""})

   useEffect(() => {
       console.log("use Effect runs")
   }, [])

    return (
        <>
            <div>
                <a href="https://papperlapp.dev" target="_blank">
                    <img src={papperlapappLogo} className="logo" alt="Papperlapapp Logo"/>
                </a>
            </div>
            <h1>How often does it run?</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <button onClick={() => dispatch({type: MyReducerActionKind.SOMETHING, payload: ""})}>
                    The Reducer
                </button>
            </div>
            <p className="read-the-docs">
                👇👇👇 Look into the dev console 👇👇👇
            </p>
        </>
    )
}

export default App
