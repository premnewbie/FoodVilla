import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { cloudinary_URL } from "../assets/Constants";
import Simmer from "../components/Simmer";
import { useFetchMenuData } from "../utils/fetchData";

function RestaurantPage() {
  const { resId } = useParams();
  const [resDetails, setResDetails] = useState({});
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await useFetchMenuData(resId);
        setResDetails(data?.[0] || {});
        setRestaurantMenu(data?.[1] || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    getData();
  }, [resId]);

  if (!resId || !Array.isArray(restaurantMenu) || restaurantMenu.length === 0) {
    return (
      <div className="restaurant-page flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Loading!!! Please wait...</h2>
        <Simmer />
      </div>
    );
  }

  return (
    <div className="restaurant-page max-w-5xl mx-auto py-10 px-4 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Welcome to {resDetails?.name}
      </h2>
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="flex-shrink-0">
          <img
            className="rounded-lg shadow-md w-full md:w-80 object-cover"
            src={cloudinary_URL + resDetails?.cloudinaryImageId}
            alt={resDetails?.name}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Menu Items</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {restaurantMenu?.map((item, index) => (
              <li
                className="menu-item p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
                key={item?.card?.info?.id+"_"+index || index}
              >
                <p className="font-medium text-lg text-gray-800">
                  {item?.card?.info?.name}
                </p>
                {item?.card?.info?.price && (
                  <p className="text-sm text-gray-500 mt-1">
                    ₹{item.card.info.price / 100}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RestaurantPage;