import React from 'react';
import '../styles/App.css'
import { Route, Routes } from 'react-router-dom'
import AdminItems from '../pages/AdminItems';
import Profile from '../pages/Profile';
import Home from '../pages/Home';
import UserItems from '../pages/UserItems';

const AppRoutes = (props) => {

    return (

        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<AdminItems admin={true} />} />
                <Route path="/user" element={<UserItems admin={false} />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    );
}

export default AppRoutes;