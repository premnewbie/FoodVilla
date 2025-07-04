import { useContext } from 'react';
import { StoreContext } from '../store/Store';

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
      />
      <div className='nav-links'>
        <p className='nav-link'>Home</p>
        <p className='nav-link'>About</p>
        <p className='nav-link'>Contact</p>
        <p className='nav-link'>Cart</p>
      </div>
    </nav>
  );
};

export default Header;