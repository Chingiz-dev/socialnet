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
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/documentation" component={Documentation} />
        </div>
      </div>
    </Router>
  );
};

export default App;
