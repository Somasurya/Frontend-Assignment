// src/components/MyProfile.js
import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const MyProfile = () => {
  const { user, updateUserProfile } = useUser();
  const [editMode, setEditMode] = useState(false);
  const [updatedUserInfo, setUpdatedUserInfo] = useState({
    name: user.name,
    email: user.email,
    address: user.address,
    phone: user.phone,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    updateUserProfile(updatedUserInfo);
    setEditMode(false);
  };

  const handleCancel = () => {
    setUpdatedUserInfo({
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone,
    });
    setEditMode(false);
  };

  return (
    <div>
      <h2>My Profile</h2>
      <div>
        {!editMode ? (
          <div>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <button onClick={() => setEditMode(true)}>Edit</button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              name="name"
              value={updatedUserInfo.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={updatedUserInfo.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              value={updatedUserInfo.address}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              value={updatedUserInfo.phone}
              onChange={handleChange}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
