import React, {createContext, useReducer, useState} from "react";
// import "./center.css"
import reducer from "../../reducer";

const initialState = { tags: new Set(['all']), messages: [] }
const store = createContext(initialState);
const {Provider} = store;
const Center = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Provider value={{state, dispatch}}><div className="center">{props.children}</div></Provider>
}

export {store, Center};
