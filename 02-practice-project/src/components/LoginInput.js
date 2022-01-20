import { useRef, useState } from "react";
import ErrorModal from "./ErrorModal";
import Wrapper from "./Helpers/Wrapper";
import Button from "./Button";

const LoginInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 && enteredAge.trim().length === 0) {
      setIsValid(false);
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setIsValid(false);
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    if (enteredName.trim().length === 0) {
      setIsValid(false);
      setError({
        title: "Invalid input",
        message: "Please enter a valid name (non-empty values)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={formSubmitHandler}>
        <div className={`login ${!isValid ? "invalid" : ""}`}>
          <label htmlFor="name">Username</label>
          <input id="name" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Wrapper>
  );
};

export default LoginInput;
