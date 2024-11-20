import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


const Navbar = () => {
  return (
    <div className="navbar">
    <div className="navbar-top">
      <div className="logo">
        {/* Your logo here */}
        <img src="your-logo.png" alt="Your Logo" />
      </div>
      <h1 className='text-2xl'>LOGO</h1>
        <div className="icons">
        <div><SearchIcon /></div>
       <div className='iconDiv'>
         <FavoriteBorderIcon/>
        </div>
        <div className='iconDiv'>
            <ShoppingBagIcon/>
        </div>
        <div className='iconDiv'>
            <PersonOutlineIcon/>
        </div>
        <div className='iconDiv'>
        EN
        </div>
        </div>
    </div>
    <div className="navbar-bottom">
      <ul>
        <li>SHOP</li>
        <li>SKILLS</li>
        <li>STORIES</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
      </ul>
    </div>
  </div>
  );
};

export default Navbar;