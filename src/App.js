import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs.js";
import Main from "./components/Main/Main";
import News from "./components/News/News.js";
import Music from "./components/Music/Music.js";
import Settings from "./components/Settings/Settings.js";
import Documentation from "./components/Documentation/Documentation.js";
import Friends from "./components/Friends/Friends";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav state={props.state.friendsPage} />
      <div className="app-wrapper-content">
        {/* Must post props this way */}
        <Route
          path="/main"
          render={() => <Main state={props.state.profilePage} />}
        />
        {/* Can post props this way also */}
        <Route path="/dialogs">
          <Dialogs state={props.state.messagesPage} />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/music">
          <Music />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/documentation">
          <Documentation />
        </Route>
        <Route
          path="/friends"
          render={() => <Friends state={props.state.friendsPage} />}
        />
      </div>
    </div>
  );
};

export default App;
