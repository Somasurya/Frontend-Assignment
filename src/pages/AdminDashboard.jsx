// src/pages/AdminDashboard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Manage Your Store</h2>
        <Link to="/admin/add-product">
          <button>Add New Product</button>
        </Link>
        <Link to="/admin/manage-orders">
          <button>Manage Orders</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
