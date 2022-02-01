import firebase from "firebase/compat/app";
import "firebase/compat/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAeIdup3oZTkvaogwgYK-saepfeJML2baw",
  authDomain: "teste-8909a.firebaseapp.com",
  databaseURL: "https://teste-8909a-default-rtdb.firebaseio.com",
  projectId: "teste-8909a",
  storageBucket: "teste-8909a.appspot.com",
  messagingSenderId: "992466207593",
  appId: "1:992466207593:web:902cc1e54de91bc4aeb3f8",
  measurementId: "G-XDSLGMWYFE",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// const { REACT_APP_VAPID_KEY } = process.env;
// const publicKey = REACT_APP_VAPID_KEY;

export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({
      vapidKey:
        "BMwcQ1NuI8yaF9KOabDfQEpbhgjXpSv6VxUyWOU9408a8vYzJK-uMLyfzak5I_rz7r2o0LE7H_-np54nSWpsOP4",
    });
    if (currentToken) {
      console.log("Have permission");
      setTokenFound(true);
    } else {
      console.log("No permission");
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
