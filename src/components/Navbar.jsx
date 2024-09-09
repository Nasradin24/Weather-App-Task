import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { AiOutlineClose } from 'react-icons/ai';
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import "./../css/Navbar.css";

const Navbar = ({ onHomeClick, onCloseClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <nav className={`navbar ${isDarkMode ? 'dark' : ''}`}>
        {/* Left Section: Always shows the FaBars icon */}
        <ul className="nav-left">
          <li className='nav-icon' onClick={handleIconClick}>
            <FaBars />
          </li>
        </ul>
        {/* Right Section: Shows menu items and close icon when isOpen is true */}
        {isOpen && (
          <ul className="nav-right">
            <li onClick={onCloseClick} className='nav-icon close-icon'>
              <AiOutlineClose />
            </li>
            <li onClick={onHomeClick} className='nav-item'>
              <IoHomeSharp /> Home
            </li>
            <li onClick={handleThemeToggle} className='nav-icon'>
              {isDarkMode ? <IoMdSunny /> : <FaMoon />}
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
