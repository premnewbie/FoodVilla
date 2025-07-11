import { useContext } from 'react';
import { StoreContext } from '../store/Store';
import { Link } from 'react-router-dom';

const img_URL = "https://files.yappe.in/place/full/the-food-villa-5873411.webp";

function Header() {
  const { searchTerm, handleSearchTerm } = useContext(StoreContext);

  return (
    <nav className='header-nav'>
      <img src={img_URL} alt='logo' />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearchTerm(e.target.value)}
        placeholder="Search restaurants"
        name="searchRestaurant"
        id="search-bar"
      />
      <ul className='nav-links'>
        <li className='nav-link' key="home"><Link to='/'>Home</Link></li>
        <li className='nav-link' key="about"><Link to="/about">About</Link></li>
        <li className='nav-link'key="contact"><Link to="/contact">Contact</Link></li>
        <li className='nav-link' key="cart"><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Header;