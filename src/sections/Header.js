import { useContext } from 'react';
import { StoreContext } from '../store/Store';
import { Link } from 'react-router-dom';

const img_URL = "https://files.yappe.in/place/full/the-food-villa-5873411.webp";

function Header() {
  const { searchTerm, handleSearchTerm } = useContext(StoreContext);

  return (
    <nav className="flex items-center justify-between bg-white shadow-md px-6 py-4 sticky top-0 z-50">
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

      {/* Search Input */}
      <div className="flex-grow mx-6 max-w-lg">
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

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-indigo-600 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-indigo-600 transition">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-indigo-600 transition">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/cart" className="hover:text-indigo-600 transition">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
