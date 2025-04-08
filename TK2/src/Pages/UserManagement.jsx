import React, { useEffect, useState } from 'react';
import { getUsers } from '../Services/userApi';
import UserTable from '../Components/UserTable';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">User Management</h1>
      <UserTable users={users} />
    </div>
  );
};

export default UserManagement;
