import React, {createContext, useReducer, useState} from "react";
// import "./center.css"
import reducer from "../../reducer";

const initialState = { tag: 'all', messages: [] }
const store = createContext(initialState);
const {Provider} = store;
const Center = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log("STATE: ", state)

    return <Provider value={{state, dispatch}}><div className="center">{props.children}</div></Provider>
}

export {store, Center};
