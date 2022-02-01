import { useState, useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { getToken } from "../../firebase";

const Notifications = (props) => {
  const [isTokenFound, setTokenFound] = useState(false);

  console.log("Token found", isTokenFound);

  useEffect(() => {
    let data;

    async function tokenFunc() {
      data = await getToken(setTokenFound);
      if (data) {
        console.log("Token is", data);
      }
      return data;
    }

    tokenFunc();
  }, []);

  return <Fragment></Fragment>;
};

Notifications.propTypes = {};

export default Notifications;
