import { useContext } from 'react';
import { StoreContext } from '../store/Store';
import RestaurantCard from '../components/RestaurantCard';

function Body() {
  const { filterRestaurants, loading } = useContext(StoreContext);

  return (
    <div>
      <div className='container'>
        {!loading && filterRestaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.info.name} />
        ))}
        {loading && (
          <>
            {Array(30).fill(0).map((ele, i) => (
              <div className='simmer' key={i}></div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
