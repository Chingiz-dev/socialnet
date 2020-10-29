import React from "react";
import { NavLink } from "react-router-dom";
import st from "./../Dialogs.module.css";

const Dialog = (props) => {
  return (
    <div className={st.dialog + " " + st.dialogActive} >
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default Dialog;
