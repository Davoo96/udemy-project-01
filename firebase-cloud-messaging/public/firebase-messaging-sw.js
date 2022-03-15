// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

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

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.tittle;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
