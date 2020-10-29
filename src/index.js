import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let postData = [
  { id: 1, text: "learn React", likes: 7 },
  { id: 2, text: "awesome", likes: 3 },
  { id: 1, text: "learn Redux", likes: 11 },
];

let dialogData = [
  { id: 1, name: "jon" },
  { id: 2, name: "sara" },
  { id: 3, name: "nity" },
  { id: 4, name: "kate" },
  { id: 5, name: "suzy" },
];

let messagesData = [
  { id: 1, message: "Hello" },
  { id: 2, message: "What's up?" },
  { id: 3, message: "React is awesome" },
  { id: 4, message: "Need hepl" },
  { id: 5, message: "Rojer that" },
  { id: 6, message: "How dare you?" },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      postData={postData}
      dialogData={dialogData}
      messagesData={messagesData}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
