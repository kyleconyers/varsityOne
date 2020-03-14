import React, { useContext, useState, useEffect } from "react";
// import "./MessageList.css";
import Message from "../Message";
import ML from "../MessageList";
import API from "../../utils/API";
import { store } from "../Center/center";
// import { threadId } from "worker_threads";

/**
 * 
 * @param {array} messages 
 * @returns {array} The locations that are in these messages
 */

function getPostedForums(messages) {
    const postedLocations = {};
    messages.forEach((message) => {
        postedLocations[message.forum_id] = null;
    });
    return Object.keys(postedLocations);
};


function Articles(props) {
    let user_path = window.location.pathname;
    user_path = user_path.split("/");
    if(user_path.length > 2) {
        user_path = user_path[2];
    }
    let {state, dispatch} = useContext(store);
    let [messages, setMessages] = useState(null);
    let [forums, setForums] = useState(null);
    let [path, setPath] = useState(user_path)
    let [user, setUser] = useState(null);
    let [prevTag, setPrevTag] = useState(null);

    function getUser(name) {
        console.log("pathname in getUser", name)
        API.getUser(name)
            .then((data) => {
                console.log("DATA on call to getUser: ", data)
                let user = data.data; 
                setUser(user);
                getMessagesByUser(user)
            })
            .catch((err) => {
                console.log("oops, err: ", err)
            })
    }

    
    function getMessagesByUser(user) {
        let tag = state.tag;
        API.getMessageByUser(user._id, tag)
            .then((data) => {
                setMessages(data.data)
                console.log("DATA FROM MESSAGELIST 16", data)
            });     
    }
    
    if(props.user) {
        if(user == null) {
            setUser(props.user);
            getMessagesByUser(props.user)
        }
    } else {
        if(user == null) {
            getUser(path);
        }
    }


    let tag = state.tag;
    console.log("USER IS: ", user)
    if(tag != prevTag) {
        setPrevTag(tag);
        getUser(path);
    }

    return(<ML messages={messages} />);

}


export default Articles;