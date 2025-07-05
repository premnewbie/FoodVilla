export default async function fetchData() {
  try {
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622");
    const json = await response.json();
    const data = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    return data;
  } catch (error) {
    console.error("Failed to fetch restaurants:", error);
    return [];
  }
};