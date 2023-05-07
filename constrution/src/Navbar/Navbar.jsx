import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  const [showMediaIcons, SetshowMediaIcons] = useState(false);
  return (
    <>
     <nav className='mainNav hampostion'>
       
                          {/*1st */}
            <div className="logo">
                <h2>
                    <Link to="/">TConstruction</Link>
                    
                </h2>
            </div>
            {/* 2nd */}
            <div className= {showMediaIcons ? "menuLink mobile-menu-link" : "menuLink"}>
                <ul>
                    <li><Link to="/">Home</Link></li>

                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                
            </div>

            <div className="contact">
               <button>Contact Us</button>
            </div>


            <div className="hambergur">
                  <a href="#" onClick={()=>SetshowMediaIcons(!showMediaIcons)}><FaBars/></a>
           </div>
      
        </nav>    
        <Outlet/>  
    </>
  )
}

export default Navbar
