// src/Pages/UserManagement.jsx
import React, { useEffect, useState } from "react";
import userData from "../data/users.json"; 
import UserTable from "../components/UserTable";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Chỉ cần gán dữ liệu khi load
    setUsers(userData);
  }, []);

  // Tạm thời bỏ qua create/update vì không thao tác với backend
  const handleUserSave = (savedUser) => {
    console.log("Saving user:", savedUser);
    // Có thể viết code cập nhật local state ở đây nếu muốn
  };

  return (
    <div>
      <UserTable users={users} onUserSave={handleUserSave} />
    </div>
  );
};

export default UserManagement;
