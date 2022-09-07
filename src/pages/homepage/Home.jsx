import React from 'react'
import Header from '../../component/header/Header'
import Listing from '../../component/listing/Listing'
import Sidebar from '../../component/sidebar/Sidebar'
import './Home.css'
function Home() {
  return (
    <div>
    <Header />
    <div className='home-page'>
      <Listing />
      <Sidebar />
    </div>
    </div>
  )
}

export default Home