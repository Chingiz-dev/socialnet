import React from "react";
import st from "./Main.module.css";
import MyPosts from "./MyPosts/MyPosts.js";
import Profile from "./Profile/Profile.js";

const Main = (props) => {
  return (
    <main className={st.main}>
      <Profile />
      <MyPosts postData={props.postData} />
    </main>
  );
};

export default Main;
