import React from 'react';
import PostList from './components/PostList';
import './styles/App.css'
import PostAdd from './components/PostAdd';
import PostHeader from './components/PostHeader';
import { useDispatch, useSelector } from "react-redux"
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import AdminItems from './pages/AdminItems';
import UserItems from './pages/UserItems';
import Profile from './pages/Profile';


function App() {

  return (
    <div>
      <div className='wrapper__navbar'>
        <div className='navbar'>

          <nav>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/admin'}>Admin items</Link></li>
              <li><Link to={'/user'}>User items </Link></li>
              <li><Link to={'/profile'}>Profile</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminItems />} />
          <Route path="/user" element={<UserItems />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>

  );
}

export default App;


