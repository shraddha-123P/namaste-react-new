import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
let [ListOfRestaurants, setListOfRestaurant] = useState([]);

useEffect(()=> {
  fetchData();
}, []);

const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.550855&lng=73.937188&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
  );
 const json = await data.json();
 const restaurants =
      json?.data?.cards
        ?.map((card) => card?.card?.card)
        ?.find((c) => c?.restaurants)?.restaurants;
      setListOfRestaurant(restaurants || []);
  };
    // {
    //  info: {
    //   id: "24414",
    //   name: "Domino's Pizza",
    //   cloudinaryImageId:
    //   "2025/11/11/035cf402-986f-49b6-9e29-6f75237586c0_24414.JPG", 
    //   costForTwo: "₹400 for two",
    //   cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    //   avgRatingString: "4.3",
    //   deliveryTime: 25,
    //   },
    // },
    // {
    //  info: {
    //   id: "24415",
    //   name: "kfc",
    //   cloudinaryImageId:
    //   "2025/11/11/035cf402-986f-49b6-9e29-6f75237586c0_24414.JPG", 
    //   costForTwo: "₹400 for two",
    //   cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    //   avgRatingString: "4.4",
    //   deliveryTime: 25,
    //   },
    // },
 
  return (
    <div className="body">
      <div className="filter">
      <button 
         className="filter-btn" 
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => parseFloat(res.info.avgRatingString) > 4.5
            );
            setListOfRestaurant(filteredList);
          }}
      >
        Top Rated Restaurants
        </button>
        </div>
      <div className="res-container">
      {ListOfRestaurants.map((restaurants) => (        
          <RestaurantCard 
          key={restaurants.info.id} 
          resData={restaurants} />
        ))}
      </div>
    </div>
  );
};
export default Body;

/* {resList.restaurants.map((restaurants) => ( */