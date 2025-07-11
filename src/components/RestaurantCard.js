import { Link } from "react-router-dom"
import { cloudinary_URL } from "../assets/Constants"

function RestaurantCard({ restaurant }) {
    return (
        <Link to={`/restaurant/${restaurant.info.id}`} className='card'>
            <img src={cloudinary_URL + restaurant?.info?.cloudinaryImageId} alt={restaurant.info.name + "-pic"} />
            <div className="restaurant-name">
                <h3>{restaurant.info.name}</h3>
            </div>

        </Link>
    )
}

export default RestaurantCard