import React from "react";

function UserForm(props) {
  const [userEmail, setUserEmail] = React.useState();
  const [username, setUsername] = React.useState();
  const submitHandler = (e) => {
    e.preventDefault();
    props.addUser({ name: username, email: userEmail });
    setUserEmail("");
    setUsername("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="email"
        placeholder="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button>submit</button>
    </form>
  );
}

export default UserForm;
