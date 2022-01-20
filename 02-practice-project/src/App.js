import { render } from "react-dom";
import { StrictMode } from "react";
import UserLogin from "./components/UserLogin";

const App = () => {
  return (
    <>
      <UserLogin />
    </>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
