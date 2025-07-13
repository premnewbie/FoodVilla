import { useContext, useState } from 'react';
import { StoreContext } from '../store/Store';
import { Link, useLocation } from 'react-router-dom';

const img_URL = "https://files.yappe.in/place/full/the-food-villa-5873411.webp";

function Header() {
  const { searchTerm, handleSearchTerm } = useContext(StoreContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Check if URL contains "/restaurant/"
  const isRestaurantPage = location.pathname.includes("/restaurant/");

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 sticky-top">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={img_URL}
              alt="logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Search Input (only if NOT on restaurant page) */}
        {!isRestaurantPage && (
          <div className="flex-grow mx-4 max-w-md hidden sm:block">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchTerm(e.target.value)}
              placeholder="Search restaurants"
              name="searchRestaurant"
              id="search-bar"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        )}

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-indigo-600 transition">Cart</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation (with conditional search) */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          {!isRestaurantPage && (
            <div className="mb-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearchTerm(e.target.value)}
                placeholder="Search restaurants"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}
          <ul className="flex flex-col space-y-2 text-gray-700 font-medium">
            <li><Link to="/" className="block hover:text-indigo-600">Home</Link></li>
            <li><Link to="/about" className="block hover:text-indigo-600">About</Link></li>
            <li><Link to="/contact" className="block hover:text-indigo-600">Contact</Link></li>
            <li><Link to="/cart" className="block hover:text-indigo-600">Cart</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;