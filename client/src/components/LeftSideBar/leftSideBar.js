import React from "react";
import MiniProfile from '../MiniProfile'
import Districts from '../Districts'
import OtherDistricts from '../OtherDistricts'

// import "./leftSideBar.css"

const LeftSideBar = props => {
    
    return (<div className="leftSideBar">
    <MiniProfile className="profile" user={props.user} changeUSState={props.setNewValue} />
    
    <Districts 
        className="districts" 
        user={props.user} 
        changeUSState={props.setNewValue} 
        usState={props.usState}
        changeTwitterFn={props.changeTwitterFn}
    >
        <p>
            Districts
        </p>
    </Districts>
    {/* <OtherDistricts className="otherDistricts">
        <p>
            The Other Districts
        </p>
    </OtherDistricts> */}
</div>)}

// {props.children}

export default LeftSideBar;