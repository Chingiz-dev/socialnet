import React from "react";
import { NavLink } from "react-router-dom";
import st from "./Dialogs.module.css";

let dialogData = [
  { id: 1, name: "jon" },
  { id: 2, name: "sara" },
  { id: 3, name: "nity" },
  { id: 4, name: "kate" },
  { id: 5, name: "suzy" },
];

let messagesData = [
  { id: 1, message: "Hello" },
  { id: 2, message: "What's up?" },
  { id: 3, message: "React is awesome" },
  { id: 4, message: "Need hepl" },
  { id: 5, message: "Rojer that" },
  { id: 6, message: "How dare you?" }
];

const Dialog = (props) => {
  return (
    <div className={st.dialog + " " + st.dialogActive} key={props.id}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Messages = (props) => {
  return (
    <div className={st.message} key={props.id}>
      {props.message}
    </div>
  );
};

let messages = messagesData.map((m) => (
  <Messages key={m.id} message={m.message} />
));

let dialogs = dialogData.map((d) => <Dialog id={d.id} name={d.name} />);

const Dialogs = () => {
  return (
    <div className={st.dialogs}>
      <div className={st.dialogsItems}>
        <h2>Dialogs</h2>
        {dialogs}
      </div>
      <div className={st.messages}>
        <h2>Messages</h2>
        { messages }
      </div>
    </div>
  );
};
export default Dialogs;
