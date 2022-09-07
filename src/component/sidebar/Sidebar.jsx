import React from 'react'
import './Sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar-section'>
      <div className='sidebar-subsection'>
        <span className='sidebar-title'>about me</span>
        <img className='sidebar-img' src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300"  />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Necessitatibus atque quas dicta, tempora ea tenetur reprehenderit 
          fugiat dolores vitae accusamus perferendis? Dolore recusandae ab, iure veniam quis eligendi sapiente dignissimos?</p>           
      </div>
      <div className='sidebar-subsection'>
        <span className='sidebar-title'> categories </span>
       <ul className='sidebar-categories'>
        <li className='sidebar-category'>Buy</li>
        <li className='sidebar-category'>Sell</li>
        <li className='sidebar-category'>Rent</li>
        <li className='sidebar-category'>B2B</li>
        <li className='sidebar-category'>Comercials</li>
        <li className='sidebar-category'>Hostel</li>
       </ul>
      </div>
      <div className='sidebar-subsection'>
        <span className='sidebar-title'> follow us on:</span>
      <div className='sidebar-social-icons'>
      <i className ="sidebar-social-icon fa-brands fa-linkedin"></i>
     <i className ="sidebar-social-icon fa-brands fa-github-alt"></i>
     <i className ="sidebar-social-icon fa-brands fa-square-facebook"></i>
      </div>
      </div>
    </div>
  )
}

export default Sidebar