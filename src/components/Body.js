import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
let [ListOfRestaurants, setListOfRestaurant] = useState([]);
let [filteredRestaurant, setFilteredRestaurant] = useState([]);
const [searchText, setSearchText] = useState("");

useEffect(()=> {
  fetchData();
}, []);

const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.550855&lng=73.937188&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const json = await data.json();
  // Optional Chaining
 const restaurants = json?.data?.cards?.find(
    (card) =>
      card?.card?.card?.gridElements?.infoWithStyle?.restaurants
  )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  setListOfRestaurant(restaurants || []);
  setFilteredRestaurant(restaurants || []);

};
  // Conditional Rendering
 return ListOfRestaurants.length === 0 ? (
   <Shimmer />
 ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" 
          className="search-box"
          value={searchText}
          onChange={(e)=> {
            setSearchText(e.target.value);
          }}
          />
          <button 
           onClick={() => {
                //  Filter the restaurant cards and update the UI
              //  searchText
              console.log(searchText);
              const filteredRestaurant = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
           }}>Search</button>

      </div>
      <button 
         className="filter-btn" 
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => parseFloat(res.info.avgRatingString) > 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
      >
        Top Rated Restaurants
        </button>
        
        </div>
<div className="res-container">
  {Array.isArray(filteredRestaurant) &&
    filteredRestaurant.map((restaurant) => {
     console.log(restaurant.info.cloudinaryImageId);
  return (
    <RestaurantCard
      key={restaurant.info.id}
      resData={restaurant}
      />
  );
})}
</div>
    </div>
  )
}
export default Body;

/* {resList.restaurants.map((restaurants) => ( */