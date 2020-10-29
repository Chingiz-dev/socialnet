import React from "react";
import st from "../Main.module.css";

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


export default Profile;
