// src/components/ProtectedRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, isAdmin, component }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isAuthenticated && !isAdmin) {
    return <Navigate to="/" />;
  }

  return component;
};

export default ProtectedRoute;
