import React from 'react';
import '../styles/App.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Links = (props : any) => {
    let title = ''
    const isAdmin = useSelector<{ state : any , isAdminReducer: any }>(state => state.isAdminReducer.isAdmin);
    if (isAdmin) {
        title = 'Admin'
    }
    else {
        title = 'User'
    }


    return (

        <div className='wrapper__navbar'>
            <div className='navbar'>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/admin'}>Admin items</Link></li>
                        <li><Link to={'/user'}>User items </Link></li>
                        <li><Link to={'/profile'}>Profile</Link></li>
                        <li><Link to={'/auth'}>Auth</Link></li>
                        <li><Link to={'/card'}>Card</Link></li>
                        <li><Link to={'/role'}>{title}</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}



export default Links;