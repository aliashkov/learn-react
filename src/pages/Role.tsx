import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { adminRoleAction, userRoleAction } from "../actions/isAdminAction";
import React from 'react';

const Role = () => {
    const dispatch = useDispatch();
    const isAdmin = useSelector<{ state: any, isAdminReducer: any }>(state => state.isAdminReducer.isAdmin);
    React.useEffect(() => {
        if (isAdmin) {
            dispatch(userRoleAction());
        }
        else {
            dispatch(adminRoleAction());
        }
    }, []);


    return (
        <>
            <Navigate to='/'></Navigate>
        </>
    )

}

export default Role;