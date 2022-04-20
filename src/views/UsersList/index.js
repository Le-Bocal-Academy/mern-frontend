import { useEffect, useState } from "react";
import services from "../../services";
import { User } from "./User";
import "./UsersList.css";

function UsersList() {
  const [users, setUsers] = useState([]);

  function fetchAndSetUsers() {
    services
      .getUsersList()
      .then((users) => setUsers(users))
      .catch(() => alert("oh no"));
  }

  function deleteUser(id) {
    services.deleteUserById(id).then(() => {
      fetchAndSetUsers();
    });
  }

  useEffect(fetchAndSetUsers, []);

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      {users.map((user) => (
        <User
          key={user._id}
          {...user}
          onDeleteUser={() => deleteUser(user._id)}
        />
      ))}
    </div>
  );
}

export default UsersList;
