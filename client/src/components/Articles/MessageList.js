import React from "react";
// import "./MessageList.css";
import Message from "../Message";
import ML from "../MessageList";
import API from "../../utils/API"
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


class MessageList extends React.Component {

    constructor(props) {

        super(props)
        console.log("MESSAGELIST 9", this.props)
        let path = window.location.pathname;
        path = path.split("/");
        if(path.length > 2) {
            path = path[2];
        }
        console.log("The path is: ", path)
        this.state = {
            messages: [],
            forums: null,
            path: path
        }
        

    }

    getUser(name) {
        console.log("pathname in getUser", name)
        API.getUser(name)
            .then((data) => {
                console.log("DATA on call to getUser: ", data)
                let user = data.data; 
                this.getMessagesByUser(user)
            })
            .catch((err) => {
                console.log("oops, err: ", err)
            })
    }

    getMessagesByUser(user) {
        API.getMessageByUser(user._id)
            .then((data) => {
                this.setState({
                    messages: data.data
                })
                console.log("DATA FROM MESSAGELIST 16", data)

            });
    }

    getForumsWithNames() {
        API.getForums().then((data) => {
            this.setState({
                forums: data.data
            });
        });
    }
    componentDidMount() {
        if(this.props.user) {
            this.getMessagesByUser(this.props.user);
        } else {
            this.getUser(this.state.path)
        }
        
        // this.getForumsWithNames();
    }
    render() {
        const locs = [] // getPostedForums(this.state.messages);

        // TODO: get name of locs from this.state.forums
        // be careful because forums can be null. so you want to only print the buttons if its not
        const renderedLocs = locs.map((loc) => {

            return (
                <button key={loc}>{loc}</button>
            );
        });
        return (<>
            render
            {renderedLocs}
            <ML messages={this.state.messages} />

        </>);



        // return (<div className="message-group-item">
        //         {this.props.messages.map(
        //             (message) => <Message key={message._id} message={message} /> 
        //         )}
        //         </div>)
    }

}


export default MessageList;