import React, { useEffect, useState } from "react";
import { updateUser, createUser } from "./Services/userApi";
import "./App.css";

function EditModal({ user, onClose, onSave }) {
  const [formData, setFormData] = useState(user || {});

  useEffect(() => {
    setFormData(user || {});
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      let result;
      if (!user || !user.id) {
        // Nếu không có id -> thêm mới
        result = await createUser(formData);
      } else {
        // Nếu có id -> cập nhật
        result = await updateUser(user.id, formData);
      }
      onSave(result); // Gửi kết quả về cha để xử lý cập nhật
      onClose();      // Đóng modal
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content slide-in">
        <h2>{!user || !user.id ? "Add New User" : "Edit User"}</h2>
        <div className="form-grid">
          <div className="form-group">
            <label>Name</label>
            <input name="name" value={formData.name || ""} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Company</label>
            <input name="company" value={formData.company || ""} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Order Value</label>
            <input name="ordervalue" value={formData.ordervalue || ""} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Order Date</label>
            <input type="date" name="orderdate" value={formData.orderdate || ""} onChange={handleChange} />
          </div>
          <div className="form-group full-width">
            <label>Status</label>
            <select name="status" value={formData.status || "New"} onChange={handleChange}>
              <option>New</option>
              <option>In-progress</option>
              <option>Completed</option>
            </select>
          </div>
        </div>
        <div className="modal-actions">
          <button className="btn save" onClick={handleSubmit}>Save</button>
          <button className="btn cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
