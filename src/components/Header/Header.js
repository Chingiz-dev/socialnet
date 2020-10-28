import React from "react";
import st from './Header.module.css';

const Header = () => {
  return (
    <header className={st.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQd-sbvVPqoPcHMBGqMcXrUTnv2e_3xrxSWxg&usqp=CAU"
        alt="logo"
      />
    </header>
  );
};

export default Header;
