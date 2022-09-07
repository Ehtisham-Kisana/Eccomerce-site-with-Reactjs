import React from 'react'
import './Createlisting.css'
function Createlisting() {
  return (
    <>
    <div style={{ 
      backgroundImage: `url("https://images.pexels.com/photos/4252526/pexels-photo-4252526.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")` 
    }}>
    <div className='create-listing'>
        <form className='create-listing-form'>
            <div className='create-listing-form-group'>
            
            <input autoFocus={true} type="text" placeholder='Property title' className='title' />
            <label htmlFor="listingImg" className='create-listing-img-upload'>
            <i class="upload-icon fa-solid fa-upload"></i>
            </label>
            <input type='file' id='listingImg' style={{display:'none'}} />
       
            </div>
            <div className='create-listing-form-group'>
             <textarea placeholder='Property Description' className='create-listing-text create-listing-desc'></textarea>
            </div>
            </form>
            <button className='create-listing-button'>Submit</button>
        </div>
        </div>
        </>
  )

}

export default Createlisting