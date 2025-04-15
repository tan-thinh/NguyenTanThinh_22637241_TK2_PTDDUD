import React, { useState } from 'react';
import '../App.css';

const EditModal = ({ user, onClose, onSave }) => {
  const [formData, setFormData] = useState({ ...user });
  const [imagePreview, setImagePreview] = useState(formData.IMG);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set preview of selected image
        setFormData(prev => ({ ...prev, IMG: reader.result })); // Update formData with the new image
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        {/* Display image or upload new one */}
        <img src={imagePreview} alt={formData.name} className="user-img" />
        
        <h2>Edit User</h2>
        
        {/* Name Input */}
        <div className="form-group">
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} />
        </div>

        {/* Company Input */}
        <div className="form-group">
          <label>Company</label>
          <input name="company" value={formData.company} onChange={handleChange} />
        </div>

        {/* Order Value Input */}
        <div className="form-group">
          <label>Order Value</label>
          <input name="ordervalue" value={formData.ordervalue} onChange={handleChange} />
        </div>

        {/* Status Dropdown */}
        <div className="form-group">
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="New">New</option>
            <option value="In-progress">In-progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Image Upload */}
        <div className="form-group">
          <label>Upload Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
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
