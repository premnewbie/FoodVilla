import { Link } from "react-router-dom";
import { cloudinary_URL } from "../assets/Constants";

function RestaurantCard({ restaurant }) {
  return (
    <Link
      to={`/restaurant/${restaurant.info.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={cloudinary_URL + restaurant?.info?.cloudinaryImageId}
        alt={`${restaurant.info.name}-pic`}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {restaurant.info.name}
        </h3>
      </div>
    </Link>
  );
}

export default RestaurantCard;