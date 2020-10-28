import React from "react";
import { NavLink } from "react-router-dom";
import st from "./Dialogs.module.css";

const Dialog = (props) => {
  return (
    <div className={st.dialog + " " + st.dialogActive}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Messages = (props) => {
  return <div className={st.message}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={st.dialogs}>
      <div className={st.dialogsItems}>
        <h2>Dialogs</h2>
        <Dialog id="1" name="jon" />
        <Dialog id="2" name="sara" />
        <Dialog id="3" name="nity" />
        <Dialog id="4" name="kate" />
        <Dialog id="5" name="suzy" />
      </div>
      <div className={st.messages}>
        <h2>Messages</h2>
        <Messages message="hellou" />
        <Messages message="what's up" />
        <Messages message="need help" />
        <Messages message="rodjer that" />
        <Messages message="how dare you?" />
      </div>
    </div>
  );
};
export default Dialogs;
