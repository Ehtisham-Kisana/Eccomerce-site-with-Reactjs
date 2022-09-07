import React from 'react'
import './Listingitem.css'
import {Link} from 'react-router-dom';
function Listingitem() {
  return (
    <div className='listing-item'>
        <img className='listing-img' src="https://images.pexels.com/photos/1697220/pexels-photo-1697220.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <div className='listing-details'>
            <div listing-categories>
                <span className='listing-categorty'>Buy</span>
                <span className='listing-category'>Sell</span>
            </div>
        <Link to='/detail' ><span className='listing-title'> Awesome property.</span></Link>    
        <hr />
        <span className='listing-time'>2 days ago</span>
        <p className='listing-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet mollitia inventore aliquid dicta maiores culpa beatae nihil labore consectetur sapiente aperiam, praesentium dolore placeat
          . Dolor quod quo magni vero dolorem!</p>
        </div>
        
        </div>
  )
}

export default Listingitem