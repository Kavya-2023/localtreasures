import React, { useState } from 'react';
import { IoIosMenu, IoIosClose, IoIosSearch, IoIosCart, IoMdLocate } from 'react-icons/io';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleLogin }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const userEmail = localStorage.getItem('email');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignOut = () => {
    // Remove email from localStorage
    localStorage.removeItem('email');
    // Redirect or perform other sign out logic if needed
  };

  return (
    <header className="bg-background shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between items-center w-[92%] mx-auto py-2">
        <div>
          <img className="w-16 cursor-pointer" src={logo} alt="Logo" />
        </div>
        <div className={`nav-links duration-500 md:static absolute bg-background md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-text">
            <li>
              <Link to='/'>
                <a className="hover:text-gray-500" href="#">Home</a>
              </Link>
            </li>
            <li>
              <Link to="/products">
                <a className="hover:text-gray-500" href="#">Products</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden md:flex">
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-gray-100 px-4 py-2 rounded-full focus:outline-none"
            />
            <button className="absolute right-3 top-3 text-gray-500">
              <IoIosSearch />
            </button>
          </div>
          <button className="text-3xl text-gray-500">
            <IoMdLocate />
          </button>
          <Link to='/cart'>
            <button className="text-3xl text-gray-500">
            <IoIosCart />
          </button>
          </Link>
          {userEmail ? (
            <button className="bg-accent text-white px-5 py-2 rounded-full hover:bg-[#DF4C73CC]" onClick={handleSignOut}>Sign Out</button>
          ) : (
            <button className="bg-accent text-white px-5 py-2 rounded-full hover:bg-[#DF4C73CC]" onClick={toggleLogin}>Sign In</button>
          )}
          <button onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden text-text">
            {menuOpen ? <IoIosClose /> : <IoIosMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
