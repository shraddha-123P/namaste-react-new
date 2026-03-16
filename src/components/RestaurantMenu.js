import { useEffect, useState } from "react";

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.550855&lng=73.937188&restaurantId=24414&submitAction=ENTER"
    );

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <h1>Loading...</h1>;

  return (
    <div className="menu">
      <h1>Name of restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;