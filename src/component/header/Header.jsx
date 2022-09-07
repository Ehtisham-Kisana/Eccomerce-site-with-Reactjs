import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header-section'>
      <div className='hero-text'>
       <span className='hero-text-title'>Marketplace </span>
       <span className='hero-text-subtitle'>Property listing</span>
      </div>
      <img className='hero-img' src="https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-71.jpg?w=2000" />
    </div>
  )
}

export default Header