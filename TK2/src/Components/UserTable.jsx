// src/Components/UserTable.jsx
import React, { useState } from 'react';
import '../App.css';
import { PencilIcon } from '@heroicons/react/24/outline';
import EditModal from '../EditModal';

const UserTable = ({ users, onUserUpdate }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [checkedUserId, setCheckedUserId] = useState(null);

  const handleCheckboxChange = (userId) => {
    setCheckedUserId(prev => (prev === userId ? null : userId));
  };
  // chuyển đổi định dạng datedate
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  

  return (
    <div className="table-container">
      <h2>User Orders</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>✓</th>
            <th>CUSTOMER NAME</th>
            <th>COMPANY</th>
            <th>ORDER VALUE</th>
            <th>ORDER DATE</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <input
                  type="checkbox"
                  checked={checkedUserId === user.id}
                  onChange={() => handleCheckboxChange(user.id)}
                />
              </td>
              <td>{user.name}</td>
              <td>{user.company}</td>
              <td>${user.ordervalue}</td>
              <td>{formatDate(user.orderdate)}</td>
              <td>
                <span className={`status ${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </td>
              <td>
                <PencilIcon
                  className="icon"
                  onClick={() => setSelectedUser(user)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <EditModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onSave={(updatedUser) => {
            onUserUpdate(updatedUser); // callback lên cha
            setSelectedUser(null);
          }}
        />
      )}
    </div>
  );
};

export default UserTable;
