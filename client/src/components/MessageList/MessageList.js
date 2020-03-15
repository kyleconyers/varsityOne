import React from "react";
// import "./MessageList.css";
import Message from "../Message";

class MessageList extends React.Component{

    constructor(props) {
        super(props);
        console.log("MESSAGE LIST PORPS", this.props);
    }
    
    render(){
        return (<div className="message-group-item" className="centerLinksBadges">
                {(this.props.messages) ? this.props.messages.map(
                    (message) => <Message key={message._id} message={message} /> 
                ) : ""}
                </div>)
    }
}


export default MessageList;