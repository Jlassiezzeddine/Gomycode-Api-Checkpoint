import React from "react";
import "./UserRow.scss";
const UserRow = ({ user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.website}</td>
      <td>
        <i className="fas fa-ellipsis-v"></i>
      </td>
    </tr>
  );
};

export default UserRow;
