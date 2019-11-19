import React from "react";
// import "./MessageList.css";
import Message from "../Message";
import ML from "../MessageList";
import API from "../../utils/API"


class MessageList extends React.Component{

    constructor (props) {
        
        super(props)
        console.log("MESSAGELIST 9", this.props)
        this.state = {messages: []}
    }

    getMessagesByUser(){
        API.getMessageByUser(this.props.user._id)
        .then((data)=>{
            this.setState({
                messages: data.data
            })
            console.log("DATA FROM MESSAGELIST 16", data)
        })
    }
    componentDidMount(){
        this.getMessagesByUser();
    }
    render(){
        return (<ML messages={this.state.messages}/>)

        
        
        // return (<div className="message-group-item">
        //         {this.props.messages.map(
        //             (message) => <Message key={message._id} message={message} /> 
        //         )}
        //         </div>)
    }

}


export default MessageList;