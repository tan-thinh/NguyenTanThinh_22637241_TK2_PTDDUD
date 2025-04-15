import React, { useState, useRef } from 'react';
import '../App.css';

const EditModal = ({  user, isNew, onClose, onSave }) => {
  
  const [formData, setFormData] = useState({ ...user });
  const [imagePreview, setImagePreview] = useState(user.IMG || null);
  const fileInputRef = useRef();
  // const isNewUser = !formData.id;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData(prev => ({ ...prev, IMG: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = () => {
    if (!formData.IMG && !isNewUser) return; // Optional check
    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
      <h2>{isNew ? "Add New User" : "Edit User"}</h2>

        <div className="modal-header">
          {imagePreview ? (
            <div className="image-section">
              <img src={imagePreview} alt="User" className="user-img" />
              <button onClick={handleImageUploadClick} className="upload-btn">Upload Image</button>
            </div>
          ) : (
            <div className="form-group">
              <label>Upload Image</label>
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </div>

        <div className="form-group">
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Company</label>
          <input name="company" value={formData.company} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Order Value</label>
          <input name="ordervalue" value={formData.ordervalue} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Order Date</label>
          <input
            type="date"
            name="orderdate"
            value={formData.orderdate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="New">New</option>
            <option value="In-progress">In-progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="modal-actions">
          <button onClick={handleSubmit}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
