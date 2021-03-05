import React, { forwardRef } from "react";
import "./Message.css";
import { Button, IconButton } from '@material-ui/core';
import { db } from "./firebase";
import DeleteIcon from '@material-ui/icons/Delete';

const Message = forwardRef(({ id, username, message }, ref) => {
  const isUser = username === message.username

  const deleteComment = () => {
    db.collection("messages").doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }
  return (
    <div ref={ref} className={isUser ? "message__user" : "message__card"}>
      <div>
        <p><span className="message__username">{message.username}</span>:{message.text}</p>
      </div>
      <div>
       <IconButton  className="message__button" onClick={deleteComment}><DeleteIcon/></IconButton>
      </div>

    </div>
  );
})

export default Message;
