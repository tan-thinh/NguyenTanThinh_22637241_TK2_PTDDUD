import React, { useState } from 'react';
import '../App.css';
import { PencilIcon } from '@heroicons/react/24/outline';
import EditModal from '../EditModal';
import input from "../assets/IMG/Move up.png";
import text from "../assets/IMG/File text 1.png";
import download from "../assets/IMG/Download.png";

const UserTable = ({ users, onUserSave }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [checkedUserId, setCheckedUserId] = useState(null);

  const handleCheckboxChange = (userId) => {
    setCheckedUserId(prev => (prev === userId ? null : userId));
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="table-container">
      <span className='box'>
        <span className='box'><img src={text} alt="" /><h2> Detailed report</h2></span>
        <span className='box' style={{gap: '20px'}}>
          <button
            type='button'
            onClick={() => setSelectedUser({
              id: null,
              name: '',
              company: '',
              ordervalue: '',
              orderdate: new Date().toISOString().slice(0, 10),
              status: 'New',
            })}
          >
            <img src={download} alt="" className='icon' />
          </button>
          <button type='button'><img src={input} alt="" className='icon' /></button>
        </span>
      </span>

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
            onUserSave(updatedUser); // CHỖ NÀY QUAN TRỌNG
            setSelectedUser(null);
          }}
        />
      )}
    </div>
  );
};

export default UserTable;
