import React, { useEffect, useState } from "react";
import { getUsers } from "../Services/userApi";
import UserTable from "../Components/UserTable";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleUserUpdate = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    );
  };

  return (
    <div>
      <UserTable users={users} onUserUpdate={handleUserUpdate} />
    </div>
  );
};

export default UserManagement;
