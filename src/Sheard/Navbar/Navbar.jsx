import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsSun, BsMoon } from "react-icons/bs"; // Light/Dark Icons
import useTheme from "../../hooks/useTheme"; // Custom Hook Import

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); // Theme State
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu State

  // Toggle Function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 flex justify-between items-center py-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          <img className="w-28 h-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj6jmtls_40sWzJ95chbYf7GxaaO6chgnJjQ&s" alt="" />
        </Link>

        {/* Large Screen Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium text-gray-900 dark:text-white">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link to="/products" className="hover:text-blue-500">All Products</Link></li>
          <li><Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link></li>
        </ul>

        {/* Icons & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <FiShoppingCart className="text-2xl cursor-pointer text-gray-900 dark:text-white" />

          {/* Dark Mode Toggle Button */}
          <button onClick={toggleTheme} className="text-2xl text-gray-900 dark:text-white">
            {theme === "dark" ? <BsSun /> : <BsMoon />}
          </button>

          {/* Login Button */}
          <Link to="/login" className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-blue-600">
            Login
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button onClick={toggleMenu} className="md:hidden text-2xl text-gray-900 dark:text-white">
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
        <ul className="text-center text-lg font-medium text-gray-900 dark:text-white py-4">
          <li className="py-2"><Link to="/" className="hover:text-blue-500" onClick={toggleMenu}>Home</Link></li>
          <li className="py-2"><Link to="/about" className="hover:text-blue-500" onClick={toggleMenu}>About</Link></li>
          <li className="py-2"><Link to="/products" className="hover:text-blue-500" onClick={toggleMenu}>All Products</Link></li>
          <li className="py-2"><Link to="/dashboard" className="hover:text-blue-500" onClick={toggleMenu}>Dashboard</Link></li>
          <li className="py-2"><Link to="/login" className="hover:text-blue-500" onClick={toggleMenu}>Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
