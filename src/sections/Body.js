import { useContext } from "react";
import { StoreContext } from "../store/Store";
import RestaurantCard from "../components/RestaurantCard";
import Simmer from "../components/Simmer";

function Body() {
  const { filterRestaurants, loading } = useContext(StoreContext);

  return (
    <main
      className="min-h-screen bg-gray-50 py-8"
      aria-busy={loading ? "true" : "false"}
    >
      <div className="container mx-auto px-4">
        {!loading && filterRestaurants.length === 0 && (
          <p className="text-center text-gray-500 text-lg mt-20">
            No restaurants found.
          </p>
        )}

        {!loading && filterRestaurants.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterRestaurants?.map((restaurant, i) => (
              <RestaurantCard
                restaurant={restaurant}
                key={`${restaurant?.info?.id}_${i}`}
              />
            ))}
          </div>
        )}

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array(30)
              .fill(0)
              .map((_, i) => (
                <Simmer key={i} />
              ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Body;
