import React from "react";
import st from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog.js";
import Messages from "./Messages/Messages.js";

const Dialogs = (props) => {
  let messages = props.state.messagesData.map((m) => (
    <Messages key={m.id} message={m.message} />
  ));

  let dialogs = props.state.dialogData.map((d) => (
    <Dialog key={d.id} id={d.id} name={d.name} />
  ));

  let newMessageElement = React.createRef();
  let postMessage = () => {
    let messageText = newMessageElement.current.value;
    alert(messageText);
  };
  return (
    <div className={st.dialogs}>
      <div className={st.dialogsItems}>
        <h2>Dialogs</h2>
        {dialogs}
      </div>
      <div className={st.messages}>
        <h2>Messages</h2>
        {messages}
        <div>
          <textarea
            placeholder="type your new message"
            ref={newMessageElement}
          ></textarea>
        </div>
        <div>
          <button onClick={postMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
