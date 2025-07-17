import { useEffect, useState, createContext } from "react";
import { useFetchRestaurantsData, useFetchMenuData } from "../utils/fetchData";

export const StoreContext = createContext(null);

StoreContext.displayName = "StoreContext";

function Store({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      setError(null);

      try {
        const data = await useFetchRestaurantsData();

        const uniqueRestaurantsMap = new Map();
        data.forEach((restaurant) => {
          const id = restaurant?.info?.id;
          if (id && !uniqueRestaurantsMap.has(id)) {
            uniqueRestaurantsMap.set(id, restaurant);
          }
        });
        const uniqueRestaurants = Array.from(uniqueRestaurantsMap.values());

        setRestaurantsList(uniqueRestaurants);
        setFilterRestaurants(uniqueRestaurants);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load restaurants.");
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  function handleSearchTerm(txt) {
    setSearchTerm(txt);
    if (!txt) {
      setFilterRestaurants(restaurantsList);
      return;
    }

    const filtered = restaurantsList.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(txt.toLowerCase())
    );
    setFilterRestaurants(filtered);
  }

  const contextValue = {
    searchTerm,
    handleSearchTerm,
    filterRestaurants,
    restaurantsList,
    loading,
    error,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}



export default Store;