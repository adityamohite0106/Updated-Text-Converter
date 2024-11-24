import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

function Navbar() {
  const [color , setcolor] = useState('')

  const handleColorChange = () => {
   const newColor = color === 'dark' ? 'light' : 'dark';
   setcolor(newColor)
   document.body.className = newColor;
  };

  return (
    <div className="navbar">
      <div className="heading">Manage<span className="t">T</span>ext</div>
    <div className="nav-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
    </div>
    <div className="mode" onClick={handleColorChange}>
      <span className={`bi ${color === 'dark' ? 'bi-moon-stars-fill' : 'bi-brightness-high-fill'}`}></span>
      {color === 'dark' ? 'Light mode' : 'Dark mode'}
    </div>
  </div>
  
  );
}

export default Navbar;
