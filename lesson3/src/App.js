import React, { useState, useEffect } from "react";
//import { useEffect } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appWrapper: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  componentWrapper: {
    width: "400px",
    height: "600px",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
  },
}));

function App() {
  const [messagesArray, setMessagesArray] = useState([]);

  const classes = useStyles();

  const onSendMessage = (messageText) => {
    var currentTime = new Date().valueOf();
    setMessagesArray((prev) => [...prev, {
  	messageText,
	author: "me",
	timeStamp: currentTime,
    }]);
  };

  useEffect(() => {
	
	if(messagesArray.length >0 ) {
	setTimeout(() => {
		if(messagesArray[messagesArray.length - 1].author === "me") {
	var currentTime = new Date().valueOf();

        setMessagesArray((prev) => [...prev, {
  	messageText: "Ваше сообщение получено!",
	author: "robot",
	timeStamp: currentTime,
    }]);

                	
}
		
  		
	}, 1000)
	
	}

	}, [messagesArray]);
  

  return (
    <div className={classes.appWrapper}>
      <div className={classes.componentWrapper}>
        <MessageList messagesArray={messagesArray} />
        <MessageInput onSendMessage={onSendMessage} />
      </div>
    </div>
  );
}

export default App;
