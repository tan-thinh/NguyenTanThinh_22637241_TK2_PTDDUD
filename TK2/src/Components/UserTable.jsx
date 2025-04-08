import React from 'react';
import '../App.css';
import { PencilIcon } from '@heroicons/react/24/outline';

const UserTable = ({ users }) => {
  return (
    <div className="table-container">
      <h2>User Orders</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>CUSTOMER NAME</th>
            <th>COMPANY</th>
            <th>ORDER VALUE</th>
            <th>ORDER DATE</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.company}</td>
              <td>${user.ordervalue}</td>
              <td>{user.orderdate}</td>
              <td><span className={`status ${user.status.toLowerCase()}`}>{user.status}</span></td>
              <td>
                <PencilIcon className='icon'onClick={() => alert(`Edit ${user.name}`)} ></PencilIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;