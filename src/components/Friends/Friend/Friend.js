import React from "react";
const Friend = (props) => {
  return (
    <div key={props.friend.id}>
      <img
        src={props.friend.picture}
        alt={props.friend.name + "friend's name"}
      />{" "}
      name = {props.friend.name}
    </div>
  );
};

export default Friend;
