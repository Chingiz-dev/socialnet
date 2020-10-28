import React from "react";
import st from "./Main.module.css";
import MyPosts from "./MyPosts/MyPosts.js";

const Profile = (props) => {
  return (
    <div>
      <div>
        <img
          className={st.img}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQKU__vS_fUS7Ly8f-df2FfYqsYsLQ4RSAXw&usqp=CAU"
          alt="bike"
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
