import { useState } from "react";
import LoginInput from "./LoginInput";
import UsernameList from "./UsernameList";

const UserLogin = () => {
  const [userName, setUserName] = useState([]);

  const addUser = (name, age) => {
    setUserName((prevUser) => {
      const updateUser = [...prevUser];
      updateUser.unshift({
        name: name,
        age: age,
        id: Math.random().toString(),
      });
      return updateUser;
    });
  };

  let content;

  if (userName.length > 0) {
    content = <UsernameList users={userName} />;
  }

  return (
    <div>
      <div className="login-container">
        <LoginInput onAddUser={addUser} />
      </div>
      <div className="login-container">{content}</div>
    </div>
  );
};

export default UserLogin;
