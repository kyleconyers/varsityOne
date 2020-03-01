import React from "react";
import {Route} from "react-router-dom";
// import "./centerBody.css"
import Board from "../Board";

const CenterBody = props => {
    console.log("PROPS ROM CENTER DOYD", props)
    return (<div className="centerBody">{props.children}
        <div className="BoardContainer">
            <Route 
                path="/forum" 
                render={ ()=> <Board usState={props.usState} user={props.user}/> }
            />
            
        </div>
    </div>)
}

export default CenterBody;
