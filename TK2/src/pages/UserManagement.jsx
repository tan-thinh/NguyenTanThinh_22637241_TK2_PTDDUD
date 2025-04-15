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

  const handleUserSave = async (user) => {
    try {
      if (!user.id) {
        // 🟢 ADD
        const res = await axios.post("http://localhost:3000/users", user);
        setUsers(prev => [...prev, res.data]); // Thêm user mới vào state
      } else {
        // 🟡 UPDATE
        const res = await axios.put(`http://localhost:3000/users/${user.id}`, user);
        setUsers(prev => prev.map(u => (u.id === user.id ? res.data : u))); // Cập nhật user trong state
      }
    } catch (err) {
      console.error("Save error:", err);
    }
  };
  
  
  
  

  return (
    <div>
      <UserTable users={users} onUserSave={handleUserSave} />
    </div>
  );
};

export default UserManagement;
