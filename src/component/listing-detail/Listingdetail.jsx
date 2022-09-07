import React from 'react'
import './listingdetail.css'
function Listingdetail() {
  return (
      
    <div className='listing-detail'>
      <div className='listing-detail-content'>
        <img className='listing-detail-img' src="https://images.pexels.com/photos/3385662/pexels-photo-3385662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  />
        <h1 className='listing-detail-title'> 
        Awesome property
        <div className='listing-detail-action'>
        <i class="listing-detail-action-icon fa-solid fa-pen-to-square"></i>
        <i class="listing-detail-action-icon fa-regular fa-trash-can"></i>

        </div>
        </h1>
        <div className='listing-detail-meta-info'>
          <span className='listing-detail-author'>
            Author -
             <strong>
              John Snow
            </strong>
          </span>
          <span className='listing-detail-time'> 1 day ago </span>
        </div>
        <p className='listing-detail-description'>
             Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Natus voluptas quos, vitae iusto illo quod officiis alias atque molestias, quo, iure libero aliquam molestiae
               soluta a quae necessitatibus voluptatibus deleniti.
        </p>
      </div>
    </div>
  )
}

export default Listingdetail