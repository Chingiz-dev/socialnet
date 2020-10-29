import React from "react";
import st from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog.js";
import Messages from "./Messages/Messages.js";


const Dialogs = (props) => {
let messages = props.state.messagesData.map((m) => (
  <Messages key={m.id} message={m.message} />
));

let dialogs = props.state.dialogData.map((d) => <Dialog id={d.id} name={d.name} />);
  return (
    <div className={st.dialogs}>
      <div className={st.dialogsItems}>
        <h2>Dialogs</h2>
        {dialogs}
      </div>
      <div className={st.messages}>
        <h2>Messages</h2>
        {messages}
      </div>
    </div>
  );
};
export default Dialogs;
