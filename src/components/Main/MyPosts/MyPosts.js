import React from "react";
import st from "./MyPosts.module.css";
import Post from "./Post/Post.js";


const MyPosts = (props) => {
  let posts = props.postData.map((p) => (
    <Post key={p.id} text={p.text} likes={p.likes} />
  ));
  
  return (
    <div>
      <div>
        <textarea placeholder="type text here"></textarea>
      </div>
      <div>
        <button>add post</button>
      </div>
      <div>{posts}</div>
    </div>
  );
};
export default MyPosts;
