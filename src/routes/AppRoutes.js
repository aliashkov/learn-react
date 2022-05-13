import React from 'react';
import '../styles/App.css'
import { Route, Routes } from 'react-router-dom'
import AdminItems from '../pages/AdminItems';
import Profile from '../pages/Profile';
import Home from '../pages/Home';
import UserItems from '../pages/UserItems';
import Auth from '../pages/Auth';
import RequireAuth from '../hoc/RequireAuth';

const AppRoutes = (props) => {

    return (

        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<AdminItems admin={true} />} />
                <Route path="/user" element={<UserItems admin={false} />} />
                <Route path="/profile" element={
                    <RequireAuth><Profile /></RequireAuth>
                }/>
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </>
    );
}

export default AppRoutes;