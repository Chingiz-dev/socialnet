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
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      {" "}
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/dialogs">
            <Dialogs />
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
        </div>
      </div>
    </Router>
  );
};

export default App;
