import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import UserRow from "../UserRow/UserRow";
const UserList = () => {
  const [listOfUSer, setListOfUser] = useState([]);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setListOfUser(response.data))
      .catch((err) => setErrors(err));
  }, []);

  const searchTerm = useSelector((state) => state.userListReducer.searchFilter);
  const filteredUsers = listOfUSer.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.website.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <React.Fragment>
      <div className="container">
        <section className="section">
          <div className="block">
            <div className="table-container ">
              <table className="table is-fullwidth is-hoverable ">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <UserRow key={user.id} user={user} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default UserList;
