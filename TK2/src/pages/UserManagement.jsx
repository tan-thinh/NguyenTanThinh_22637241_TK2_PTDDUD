import React, { useEffect, useState } from "react";
import axios from "axios";
import UserTable from "../components/UserTable";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  const handleUserSave = (updatedUser) => {
    axios.put(`http://localhost:3000/users/${updatedUser.id}`, updatedUser)
      .then(res => {
        setUsers(prev =>
          prev.map(user => user.id === updatedUser.id ? res.data : user)
        );
      })
      .catch(err => console.error("Update error:", err));
  };

  return (
    <div>
      <UserTable users={users} onUserSave={handleUserSave} />
    </div>
  );
};

export default UserManagement;
