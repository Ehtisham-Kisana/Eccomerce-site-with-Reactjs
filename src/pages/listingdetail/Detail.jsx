import React from 'react'
import './Detail.css'
import Listingdetail from '../../component/listing-detail/Listingdetail'
import Sidebar from '../../component/sidebar/Sidebar'
function Detail() {
  return (
    <div className='detail-page'>
         
      <Listingdetail />
      <Sidebar />
    </div>
  )
}

export default Detail