import "./App.css";
import { useState } from "react";
import { onMessageListener } from "./firebase";
import Notifications from "./components/Notifications/Notifications";
import ReactNotificationComponent from "./components/Notifications/ReactNotification";
import { Fragment } from "react/cjs/react.production.min";

function App() {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });

  console.log(show, notification);

  onMessageListener()
    .then((payload) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));

  return (
    <div className="App">
      {show ? (
        <ReactNotificationComponent
          title={notification.title}
          body={notification.body}
        />
      ) : (
        <Fragment></Fragment>
      )}
      <Notifications />
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
