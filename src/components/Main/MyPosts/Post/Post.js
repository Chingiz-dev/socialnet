import React from "react";
import st from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={st.post}>
      <img
        className={st.item}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAZxuJojmnBhsIArZ_FbMgepD7mBu5VLNmiw&usqp=CAU"
        alt="girl avatar"
      />
      <div>{props.text?props.text:'some text'}</div>
      <div>{props.likes?props.likes + ' likes':''} </div>
      <button>Like!!</button>
    </div>
  );
};

export default Post;
