import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  let ListOfRestaurants = [
    {
     info: {
      id: "24414",
      name: "Domino's Pizza",
      cloudinaryImageId:
      "2025/11/11/035cf402-986f-49b6-9e29-6f75237586c0_24414.JPG", 
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRatingString: "4.3",
      deliveryTime: 25,
      },
    },
    {
     info: {
      id: "24415",
      name: "kfc",
      cloudinaryImageId:
      "2025/11/11/035cf402-986f-49b6-9e29-6f75237586c0_24414.JPG", 
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRatingString: "4.4",
      deliveryTime: 25,
      },
    },
  ];
  return (
    <div className="body">
      <div className="filter">
      <button 
         className="filter-btn" 
         onClick={()=>{
          ListOfRestaurants = ListOfRestaurants.filter(
            (res) => res.info.avgRatingString > 4);
         console.log(ListOfRestaurants);
      }}
      >
        Top Rated Restaurants
        </button>
        </div>
      <div className="res-container">
      {ListOfRestaurants.map((restaurants) => (        
          <RestaurantCard key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};
export default Body;

/* {resList.restaurants.map((restaurants) => ( */