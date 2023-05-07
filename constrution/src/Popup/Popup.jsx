import React from 'react'
import {FaPlayCircle} from  'react-icons/fa'
import './Popup.css'
const Popup = () => {
  return (
    <>
    <div className="playImage">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="playText text-center">     
                    <h4>Know more about us!</h4>
                    <h2>Check this video presentation to know more about us and our process</h2>
                    <a href="https://www.youtube.com/watch?v=vQqZIFCab9o"><FaPlayCircle className='icondesign'/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Popup
