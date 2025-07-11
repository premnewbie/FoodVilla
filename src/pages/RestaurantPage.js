import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { StoreContext } from "../store/Store";
import { cloudinary_URL } from "../assets/Constants"
import Simmer from "../components/Simmer";
import { useFetchMenuData } from "../utils/fetchData";

function RestaurantPage() {

  const { resId } = useParams();
  const [resDetails, setResDetails] = useState([]);
  const [restaurantMenu, setRestaurantMenu] = useState([])


  useEffect(() => {
    async function getData() {
      try {
        const data = await useFetchMenuData(resId);
        setRestaurantMenu(data[1]);
        setResDetails(data[0])
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    getData();
  }, [resId]);

  if (restaurantMenu.length===0) {
    return (<div className="restaurant-page">
      <h2>Loading!!! Please wait...</h2>
      <Simmer />
    </div>)
  }

  return (
    <div className="restaurant-page">
      <h2>Welcome to {resDetails.name}</h2>
      <div>
        <div><img src={cloudinary_URL + resDetails.cloudinaryImageId} alt={restaurantMenu[2]?.card?.card?.info?.name} /></div>
        <div>
          <h2>Menu Items</h2>
          <ul className="menu-items">
            {restaurantMenu?.map((item) => <li className="menu-item" key={item?.card?.info?.id}>{item?.card?.info?.name}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage