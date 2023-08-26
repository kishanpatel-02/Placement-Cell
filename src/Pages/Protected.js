import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectAdmin } from './../slices/adminSlice';

function Protected({ children }) {
    const admin = useSelector(selectAdmin);

  if (!admin) {
    return <Navigate to="/" replace />
  }
  return children
}
export default Protected