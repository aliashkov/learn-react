import React from 'react';
import '../styles/App.css'
import { Link } from 'react-router-dom'

const Links = (props) => {

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
                    </ul>
                </nav>
            </div>
        </div>
    );
}


export default Links;