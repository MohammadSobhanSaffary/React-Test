import React from "react";

function UserList(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>username</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((el) => (
          <tr>
            <td>{el.username}</td>
            <td>{el.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
