import React from 'react';

function RatingLabel(RestaurantCard) {
  
  return ({ restaurant }) => {
    return (
      <div className="relative">
        <label className="absolute left-[-0.5rem] top-3.5 w-25 p-2 m-2 bg-orange-400 text-center text-white text-shadow-black font-bold rounded-r-lg">
          {restaurant?.info?.avgRating + "⭐"}
        </label>
        <RestaurantCard restaurant={restaurant} />
      </div>
    );
  };
}

export default RatingLabel;
