import React from "react";
import Friend from "./Friend/Friend.js";

const Friends = (props) => {
  let friends = props.state.friends.map((f) => <Friend key={f.id} friend={f} />);
  return <div>{friends}</div>;
};
export default Friends;
