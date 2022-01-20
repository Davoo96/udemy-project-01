const UsernameList = (props) => {
  return (
    <ul className="user-list">
      {props.users.map((user) => (
        <li key={user.id} id={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default UsernameList;
