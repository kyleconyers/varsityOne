import React, { useContext, useEffect } from "react";
// import "./Board.css";
import MessageList from "../MessageList";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { List } from "../List";
import Message from "../Message";
import PostForm from "../PostForm";
import Card from "../Card";
import { store } from "../Center/center";


function Board(props){
  
  const parentState = useContext(store);
  const {state, dispatch} = parentState;
  //let messages = [{_id: "5daa84e359041d220f2eecd8", forum_id: "5c637e4f03735e710204f3ca", user: {"mern-passport"}, content: "text", date: "2019-10-19T03:37:07.872Z", …}];
  console.log("STATE FROM BOARD", parentState)
  
  // state = {

  //   messages: [],
  //   currentUsState: "",
  //   currentForumId: ""
  // };
  //passvvvvv form_id or whatever message board we are on 

  useEffect(() => {
    const path = window.location.pathname.split("/");
    console.log("PATH FOR MESSAGES", path)
    if (path[1] !== 'forum') {
      // throw exception because we dont understand how this url is formatted
      return;
    }
    const forumName = path[2].toUpperCase();
    if (forumName) {
      console.log(forumName);
      console.log("IN BOARD FORUM: ", state)
      if(!state.messages.length <= 0) {
        API.getSavedForum(forumName)
        // .then(data => data.json())
        .then(data => {
          if (data.data) {
            const forumId = data.data._id;
            console.log("THE FORUM ID: ", forumId)
            getSavedMessage(forumId);
          }
        });
      }
    }
  });

  function getSavedMessage(forum_id) {

    let tag = state.tags;

    let tags = Array.from(tag);
    tag = tags[0];
    console.log("THE TAG IS: ", tag);

    API.getSavedMessageByForumAndTag(forum_id, tag)
      .then(res => {
        console.log("rom response", res.data)
        let messages = res.data;
        dispatch({type: 'SET_MESSAGES', messages: messages})
        // this.setState({
        //   currentForumId: forum_id,
        //   messages: res.data
        // })
      }
      )
      .catch(err => console.log(err));
  }
  /* componentDidMount() {
    const path = window.location.pathname.split("/");
    console.log("PATH FOR MESSAGES", path)
    if (path[1] !== 'forum') {
      // throw exception because we dont understand how this url is formatted
      return;
    }

  
    const forumName = path[2].toUpperCase();
    if (forumName) {
      console.log(forumName);
      API.getSavedForum(forumName)
        // .then(data => data.json())
        .then(data => {
          if (data.data) {
            const forumId = data.data._id;
            this.getSavedMessage(forumId);
          }
        });
    }

  } */
  //load data.data toooooo load this into state
  //store array of possibble US states into STATEdom
  /* getSavedMessage = (forum_id) => {

    var tags = window.location.href.split("/");
    var tag = "all";
    console.log("TAGS", tags)
    if (tags.length > 5) {
      tag = tags[5];
    }


    API.getSavedMessageByForumAndTag(forum_id, tag)
      .then(res => {
        console.log(res.data)
        this.setState({
          currentForumId: forum_id,
          messages: res.data
        })
      }
      )
      .catch(err => console.log(err));
  }; */
  //get path 
  //This Green Part needs to be turned into message section
  ////////////////////////////////
 /*  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log("inside change")
  }; */

  /* handleMessageSave = id => {
    // const message = this.state.message.find(message => message.id === id);

    var tags = window.location.href.split("/");
    var tag = tags[5];



    console.log(this.props)
    API.saveMessage({
      //this.state.currentusstate
      forum_id: this.state.currentForumId,
      user: this.props.user._id,
      content: this.state.messageText,
      date: new Date(),
      tag: tag
    }).then(() => this.setState({ messageText: "" }))
      .then(() => this.getSavedMessage(this.state.currentForumId));
  }; */
  // resUser._id

  /* handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.messageText) {
      this.handleMessageSave();
      // this.db.insert();
      console.log("inside sumbit")
    } else {
      console.log("EMPTY MESSAGE, DID NOT SUBMIT")
    }
  }; */



  /*
  */


    return (
      <Container>

        <Row>
          <Col size="md-12">
            <Card title="Post Content" icon="far fa-book">
              <PostForm
                // handleInputChange={this.handleInputChange}
                // handleFormSubmit={this.handleFormSubmit}
                // messageText={this.state.messageText}
              />
            </Card>
            <h1>HELLO</h1>
            <MessageList
              messages={state.messages}
            />

          </Col>
        </Row>

        {/* <Row>
              <Message message={this.state.messages[0]}>
              
              </Message> 
                 <MessageList title="Results">
                  {this.state.message ? (
                    <List>
                      {this.state.message.map(message => (
                        <Message
                          key={message.id}
                          title={message.title}
                          
                         
                          author={message.author}
                          body={message.body}
                          category={message.category}
                          
                        />
                      ))}
                    </List>
                  ) : (
                    <h2 className="text-center">{this.state.message}</h2>
                  )}
                </MessageList> 
               
            </Row> */}

      </Container>
    );
  
}



export default Board;
