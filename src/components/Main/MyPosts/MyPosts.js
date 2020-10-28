import React from "react";
import st from "./MyPosts.module.css";
import Post from "./Post/Post.js";

const MyPosts = () => {
  return (
    <div>
      <div>
        <textarea placeholder="type text here"></textarea>
      </div>
      <div>
        <button>add post</button>
      </div>
      <div>
        <Post text="learn REACT" likes="7" />
        <Post text="awesome" likes="9" />
      </div>
    </div>
  );
};
export default MyPosts;
