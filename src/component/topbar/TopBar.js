import React from 'react';
import './TopBar.css';
import {NavLink} from 'react-router-dom';
function TopBar() {
  return (
    <div className='topbar'>
     <div className='topbar-left'>
     <i className ="topbar-social-icon fa-brands fa-linkedin"></i>
     <i className ="topbar-social-icon fa-brands fa-github-alt"></i>
     <i className ="topbar-social-icon fa-brands fa-square-facebook"></i>
     </div>
     <div className='topbar-centre'>
      <ul className='topbar-list'>
        <li className='topbar-list-item'>
          <NavLink to='/' >HOME</NavLink>
        </li>
        <li className='topbar-list-item'>
        <NavLink to='/about' >ABOUT</NavLink>
        </li>
        <li className='topbar-list-item'>
        <NavLink to='/contact' >CONTACT</NavLink>
        </li>
        <li className='topbar-list-item'>
        <NavLink to='/create' >CREATE PROPERTY</NavLink>
        </li>
        <li className='topbar-list-item'>LOG OUT</li>

      </ul>
     </div>
     <div className='topbar-right'>
      <img className='topbar-profile-pic' src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300' />
      <i className ="topbar-search fa-solid fa-magnifying-glass"></i>
     </div>
    </div>
  )
};

export default TopBar;