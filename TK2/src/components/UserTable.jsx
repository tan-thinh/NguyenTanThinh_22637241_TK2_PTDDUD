import React, { useState } from 'react';
import '../App.css';
import { PencilIcon } from '@heroicons/react/24/outline';
import EditModal from '../services/EditModal';
import input from "../../public/IMG/Move up.png";
import text from "../../public/IMG/File text 1.png";
import download from "../../public/IMG/Download.png";

const UserTable = ({ users, onUserSave }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [checkedUserId, setCheckedUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedUsers = users.slice(startIndex, startIndex + itemsPerPage);

  const handleCheckboxChange = (userId) => {
    setCheckedUserId(prev => (prev === userId ? null : userId));
  };
  const handleUserSave = (updatedUser) => {
    // Save the updated user to the main users list
    onUserSave(updatedUser);
    setSelectedUser(null); // Close modal after save
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
        <span className='box' style={{ gap: '20px' }}>
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
          {selectedUsers.map((user) => (
            <tr key={user.id}>
              <td>
                <input
                  type="checkbox"
                  checked={checkedUserId === user.id}
                  onChange={() => handleCheckboxChange(user.id)}
                />
              </td>
              <td style={{display:'flex', gap: '10px'}}>
              <img
                src={user.IMG} 
                alt={user.name}
              />
              <span style={{margin:'10px'}}>{user.name}</span>
              </td>
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

      {/* Pagination */}
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Show modal if a user is selected */}
      {selectedUser && (
        <EditModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onSave={handleUserSave}
        />
      )}
    </div>
  );
};

export default UserTable;
