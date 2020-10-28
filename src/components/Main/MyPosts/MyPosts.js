import React from "react";
import st from "./MyPosts.module.css";
import Post from "./Post/Post.js";

let postData = [
  { id: 1, text: "learn React", likes: 7 },
  { id: 2, text: "awesome", likes: 3 },
  { id: 1, text: "learn Redux", likes: 11 },
];

let posts = postData.map((p) => (
  <Post key={p.id} text={p.text} likes={p.likes} />
));

const MyPosts = () => {
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
