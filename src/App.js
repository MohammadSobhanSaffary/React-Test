import React from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = React.useState([]);
  const addUser = (input) => {
    setUsers((prev) => [...prev, input]);
  };
  return (
    <div className="App">
      <UserForm setUsers={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
