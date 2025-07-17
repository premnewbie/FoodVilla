import { useContext } from "react";
import { StoreContext } from "../store/Store";
import RestaurantCard from "../components/RestaurantCard";
import CardShimmer from "../components/CardShimmer";
import RatingLabel from "../components/RatingLabel";

function Body() {
  const { filterRestaurants, loading, searchTerm } = useContext(StoreContext);

  const LabelHOC = RatingLabel(RestaurantCard);

  return (
    <main
      className="min-h-screen bg-gray-50 py-8"
      aria-busy={loading ? "true" : "false"}
    >
      <div className="container mx-auto px-4">
        {(searchTerm!=="" || filterRestaurants.length === 0) && !loading && (
          <p className="text-center text-gray-500 text-lg mt-20">
            No restaurants found.
          </p>
        )}

        {filterRestaurants.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterRestaurants.map((restaurant, i) => (
              <LabelHOC
                restaurant={restaurant}
                key={`${restaurant?.info?.id}_${i}`}
              />
            ))}
          </div>
        )}

        {loading && filterRestaurants.length === 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array(30)
              .fill(0)
              .map((_, i) => (
                <CardShimmer key={i} />
              ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default Body;
