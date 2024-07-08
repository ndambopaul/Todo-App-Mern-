import React from 'react';
import Cookies from 'js-cookie';
import { Outlet, Navigate } from 'react-router-dom';
import Wrapper from './components/Wrapper';

const ProtectedRouter = ({ children }) => {
    const token = Cookies.get("token")
    console.log(`Token: ${token}`)
    
    if(!token) {
        return <Navigate to="/authenticate" replace />;
    }

    return children || <Outlet />

}

export default ProtectedRouter