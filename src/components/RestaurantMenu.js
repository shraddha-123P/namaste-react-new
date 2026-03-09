import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const { resId } = useParams();
const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.550855&lng=73.937188&restaurantId=" + resId
)

    const json = await data.json();

    console.log(json);

    setResInfo(json.data);
  };

  if (resInfo === null) return <h1>Loading...</h1>;

  
  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

  return (
    <div className="menu">
      <h1>Restaurant Menu</h1>
      <h2>Menu</h2>

      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;