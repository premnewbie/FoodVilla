export async function useFetchRestaurantsData() {
  try {

    const targetUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622";
    const response = await fetch(`${targetUrl}`);

    const json = await response.json();
    const data = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    return data;
  } catch (error) {
    console.error("Failed to fetch restaurants:", error);
    return [];
  }
};


export async function useFetchMenuData(restaurantId) {
  if(!restaurantId){
    return [];
  }
  try {

    const targetUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.951611&lng=80.14616629999999&restaurantId=${restaurantId}`;

    const response = await fetch(`${targetUrl}`);

    const json = await response.json();

    return [json?.data?.cards[2]?.card?.card?.info,json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards]

  } catch (error) {
    console.error("Failed to fetch restaurant menu:", error);
    return [];
  }
}