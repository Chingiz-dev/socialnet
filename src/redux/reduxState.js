import rerenderAll from "../render";

let reduxState = {
  profilePage: {
    postData: [
      { id: 1, text: "learn React", likes: 7 },
      { id: 2, text: "awesome", likes: 3 },
      { id: 3, text: "learn Redux", likes: 11 },
    ],
    newPostData: "",
  },
  messagesPage: {
    dialogData: [
      { id: 1, name: "jon" },
      { id: 2, name: "sara" },
      { id: 3, name: "nity" },
      { id: 4, name: "kate" },
      { id: 5, name: "suzy" },
    ],
    messagesData: [
      { id: 1, message: "Hello" },
      { id: 2, message: "What's up?" },
      { id: 3, message: "React is awesome" },
      { id: 4, message: "Need hepl" },
      { id: 5, message: "Rojer that" },
      { id: 6, message: "How dare you?" },
      { id: 7, message: "What's wrong?" },
    ],
    newMessageData: "",
  },
  friendsPage: {
    friends: [
      {
        id: 1,
        name: "lara",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9xwGkeBSGw7ar-eyC_GE9Eu8f123TsZzCow&usqp=CAU",
      },
      {
        id: 2,
        name: "Sara",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2RVHFmtDk7XwdaZIv8Z_m_Hr716DMEPPx2g&usqp=CAU",
      },
    ],
  },
};

export let addPost = () => {
  let newPostId = reduxState.profilePage.postData.length + 1;
  let post = { id: newPostId, text: reduxState.profilePage.newPostData, likes: 0 };
  reduxState.profilePage.postData.push(post);
  reduxState.profilePage.newPostData = "";
  rerenderAll(reduxState);
};

export let newPostData = (newPostData) => {
  reduxState.profilePage.newPostData = newPostData;
  rerenderAll(reduxState);
};

export let addMessage = () => {
  let newMessageId = reduxState.messagesPage.messagesData.length + 1;
  let newMessageObj = { id: newMessageId, message: reduxState.messagesPage.newMessageData };
  reduxState.messagesPage.messagesData.push(newMessageObj);
  reduxState.messagesPage.newMessageData = '';
  rerenderAll(reduxState);
};

export let newMessageData = (data) => {
  reduxState.messagesPage.newMessageData = data;
  rerenderAll(reduxState);
};

export default reduxState;
