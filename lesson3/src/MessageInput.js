import { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  input: {
    margin: "0px 10px",
    width: "70%",
  },

  button: {
    margin: "0px 10px",
  },

  inputWrapper: {
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const MessageInput = ({ onSendMessage }) => {
  const classes = useStyles();
  const [inputMessage, setInputMessage] = useState("");

  const sendAndRemoveInput = () => {
    const trimmedMessageText = inputMessage.trim();
    if (trimmedMessageText !== "") {
      onSendMessage(trimmedMessageText);
      setInputMessage("");
    }
  };


  return (
    <div className={classes.inputWrapper}>
      <TextField
	autoFocus = {true}
        value={inputMessage}
        label="Введите сообщение"
        onChange={(e) => setInputMessage(e.target.value)}
        onKeyDown={({ key }) => {
          if (key === "Enter") {
            sendAndRemoveInput();
          }
        }}
        // multiline
        classes={{
          root: classes.input,
        }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={sendAndRemoveInput}
	
	className={classes.button}
///        startIcon={<Icon>send</Icon>}      
        endIcon={<SendIcon />}      

	>
        Отправить
      </Button>
    </div>
  );
};


MessageInput.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
};

export default MessageInput;
