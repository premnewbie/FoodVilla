import { useEffect, useState, createContext } from "react";
import fetchData from "../utils/fetchData";

export const StoreContext = createContext(null);

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
        const data = await fetchData();
        setRestaurantsList(data);
        setFilterRestaurants(data);
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
