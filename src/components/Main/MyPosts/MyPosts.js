import React from "react";
import st from "./MyPosts.module.css";
import Post from "./Post/Post.js";

const MyPosts = (props) => {
  let posts = props.postData.map((p) => (
    <Post key={p.id} text={p.text} likes={p.likes} />
  ));

  let newPostElement = React.createRef();

  let addNewPost = () => {
    props.addPost();    
  };

  let handleOnChange = () => {
    props.addNewPostData(newPostElement.current.value);
  };

  return (
    <div>
      <div>
        <textarea
          placeholder="type text here"
          onChange={handleOnChange}
          ref={newPostElement}
          value={props.newPostData}
        />
      </div>
      <div>
        <button onClick={addNewPost}>add post</button>
      </div>
      <div>{posts}</div>
    </div>
  );
};
export default MyPosts;
