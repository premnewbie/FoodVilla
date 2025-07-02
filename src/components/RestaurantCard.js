import { cloudinary_URL } from "../assets/Constants"

function RestaurantCard({ restaurant }) {
    return (
        <div className='card'>
            <img src={cloudinary_URL + restaurant.info.cloudinaryImageId} alt={restaurant.info.name + "-pic"} />
            <h3>{restaurant.info.name}</h3>
        </div>
    )
}

export default RestaurantCard