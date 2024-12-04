import React from 'react';

function Messages({message}){
    return(
        <div className="messages-container">
      <h1>Messages</h1>
      <div className="message">
        <h2>{message.m1}</h2>
      </div>
      <div className="message">
        <h2>{message.m2}</h2>
      </div>
      <div className="message">
        <h2>{message.m3}</h2>
      </div>
    </div>
    )
}
export default Messages;