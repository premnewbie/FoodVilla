export async function useFetchRestaurantsData() {
  const targetUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622";

  try {
    const response = await fetch(targetUrl);
    const json = await response.json();

    const restaurants = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    return restaurants || [];
  } catch (error) {
    console.error("Failed to fetch restaurants:", error);
    return [];
  }
}


export async function useFetchMenuData(restaurantId) {
  if (!restaurantId) {
    console.warn("fetchMenuData: Missing restaurantId");
    return [null, []];
  }

  const targetUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.951611&lng=80.14616629999999&restaurantId=${restaurantId}`;

  try {
    const response = await fetch(targetUrl);
    const json = await response.json();

    const cards = json?.data?.cards || [];

    const restaurantInfo = cards.find(card => card?.card?.card?.info)?.card?.card?.info || null;

    const menuItems = cards.find(card =>
      card?.groupedCard?.cardGroupMap?.REGULAR?.cards
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.flatMap(card => card?.card?.card?.itemCards || [])
      ?.filter(Boolean) || [];

    return [restaurantInfo, menuItems];
  } catch (error) {
    console.error("Failed to fetch restaurant menu:", error);
    return [null, []];
  }
}
