import { useEffect , useState} from "react";
import resList from "../utils/mockData"
import { useDispatch } from "react-redux";
const RestaurantMenu = () => 
  {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.550855&lng=73.937188&restaurantId=24414&submitAction=ENTER"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };

  // if (resInfo === null) return <h1>Loading...</h1>;

};
export default RestaurantMenu;