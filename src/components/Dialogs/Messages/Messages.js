import React from "react";
import st from "./../Dialogs.module.css";

const Messages = (props) => {

  return (
    <div className={st.message} key={props.id}>
      {props.message}
    </div>
  );
};
export default Messages;
