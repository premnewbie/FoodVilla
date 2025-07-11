import { useContext } from 'react';
import { StoreContext } from '../store/Store';
import RestaurantCard from '../components/RestaurantCard';
import Simmer from '../components/Simmer';

function Body() {
  const { filterRestaurants, loading } = useContext(StoreContext);

  return (
    <div>
      Body component
      <div className='container'>
        {!loading && filterRestaurants.map((restaurant,i) => (
          <RestaurantCard restaurant={restaurant} key={restaurant?.info?.id} />
        ))}
        {loading && (
          <>
            {Array(30).fill(0).map((_, i) => (
              <Simmer key={i} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
