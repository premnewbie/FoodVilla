import { useState } from "react";
import { restaurants } from "../src/assets/Constants";
import { createContext } from "react";

export const StoreContext = createContext(null);

function Store({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurantsList, setRestaurantsList] = useState(restaurants);

  function handleSearchTerm(txt) {
    if (txt === "" || txt === null) {
      setSearchTerm("");
      setRestaurantsList(restaurants);
    } else {
      setSearchTerm(txt);
      setRestaurantsList(
        restaurants.filter((restaurant) =>
          restaurant.info.name.toLowerCase().includes(txt.toLowerCase())
        )
      );
    }
  }

  return (
    <StoreContext.Provider value={{ searchTerm, handleSearchTerm, restaurantsList }}>
      {children}
    </StoreContext.Provider>
  );
}

export default Store;
