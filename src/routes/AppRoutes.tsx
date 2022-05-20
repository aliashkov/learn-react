import React from 'react';
import '../styles/App.css'
import { Route, Routes } from 'react-router-dom'
import AdminItems from '../pages/AdminItems';
import Profile from '../pages/Profile';
import Home from '../pages/Home';
import UserItems from '../pages/UserItems';
import Auth from '../pages/Auth';
import RequireAuth from '../hoc/RequireAuth';
import RequireAdmin from '../hoc/RequireAdmin';
import RequireUser from '../hoc/RequireUser';
import Role from '../pages/Role';
import Card from '../pages/Card';

const AppRoutes = (props: any) => {

    return (

        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={
                    <RequireAdmin><AdminItems admin={true} /> </RequireAdmin>
                } />
                <Route path="/user" element={
                    <RequireUser><UserItems admin={false} /> </RequireUser>
                } />
                <Route path="/profile" element={
                    <RequireAuth><Profile /></RequireAuth>
                } />

                <Route path="/auth" element={<Auth />} />

                <Route path="/card" element={
                    <RequireUser><Card /></RequireUser>
                } />

                <Route path="/role" element={<Role />} />

            </Routes>
        </>
    );
}

export default AppRoutes;