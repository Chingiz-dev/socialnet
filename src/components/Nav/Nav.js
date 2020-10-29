import React from "react";
import st from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  let friends = props.state.friends.map((f) => <div key={f.id}>{f.name}</div>);
  return (
    <nav className={st.nav}>
      <div className={st.item}>
        <NavLink to="/main" activeClassName={st.activeLink}>
          Main
        </NavLink>
      </div>
      <div className={st.item}>
        <NavLink to="/dialogs" activeClassName={st.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={st.item}>
        <NavLink to="/news" activeClassName={st.activeLink}>
          News
        </NavLink>
      </div>
      <div className={st.item}>
        <NavLink to="/music" activeClassName={st.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={st.item}>
        <NavLink to="/settings" activeClassName={st.activeLink}>
          Settings
        </NavLink>
      </div>
      <div className={st.item}>
        <NavLink to="/documentation" activeClassName={st.activeLink}>
          Documentation
        </NavLink>
      </div>
      <div className={st.friends}>
        Friends
        <NavLink to="/friends" activeClassName={st.activeLink}>
          <div>{friends}</div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
