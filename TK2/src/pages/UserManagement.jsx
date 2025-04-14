import React, { useEffect, useState } from "react";
// import { getUsers, createUser, updateUser } from "../Services/userApi";
import UserTable from "../components/UserTable";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUserSave = async (savedUser) => {
    try {
      if (!savedUser.id) {
        // Thêm mới
        await createUser(savedUser);
      } else {
        // Cập nhật
        await updateUser(savedUser.id, savedUser);
      }

      // Load lại danh sách user sau khi thêm hoặc cập nhật
      await fetchData();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  return (
    <div>
      <UserTable users={users} onUserSave={handleUserSave} />
    </div>
  );
};

export default UserManagement;
