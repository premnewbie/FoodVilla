import { useContext } from 'react';
import { StoreContext } from '../../store/Store';
import RestaurantCard from '../components/RestaurantCard';

function Body() {

  const { restaurantsList } = useContext(StoreContext);

  return (
    <div>
      <div className='container'>
        {restaurantsList.map((restaurant) => <RestaurantCard restaurant={restaurant} key={restaurant.info.name} />)}
      </div>
    </div>
  );
};

export default Body;