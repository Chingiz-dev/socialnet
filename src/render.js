import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { addPost, addMessage, newPostData, newMessageData } from "./redux/reduxState";

let rerenderAll = (reduxState) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App state={reduxState} addMessage={addMessage} addPost={addPost} newPostData={newPostData} newMessageData={newMessageData} />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

export default rerenderAll;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
