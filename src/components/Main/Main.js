import React from "react";
import st from "./Main.module.css";
import MyPosts from "./MyPosts/MyPosts.js";

const Profile = (props) => {
  return (
    <div>
      <div>
        <img
          className={st.img}
          src="https://i.pinimg.com/originals/28/9d/4b/289d4bdac73819cd3a48bd7a238810ef.jpg"
          alt="rose beach"
        />
      </div>
      <div>ava + description</div>
    </div>
  );
};

const Main = () => {
  return (
    <main className={st.main}>
      <Profile />
      <MyPosts />
    </main>
  );
};

export default Main;
