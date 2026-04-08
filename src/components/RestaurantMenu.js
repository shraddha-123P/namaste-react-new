import { useEffect , useState} from "react";
import MENU_DATA from "../utils/menuData";
import resList from "../utils/mockData"
const RestaurantMenu = () => 
  {

  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.550855&lng=73.937188&restaurantId=24414&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  // if (resInfo === null) return <h1>Loading...</h1>;

  return (
 <div className="w-6/12 mx-auto my-6">

      <h1 className="text-2xl font-bold mb-4">
        {resList.restaurants[0].info.name}</h1>

      {MENU_DATA.map((cat, index) => (
        <div key={index} className="mb-4 border rounded-lg shadow-sm">

          {/* Category Header */}
          <div
            className="flex justify-between p-4 bg-gray-100 cursor-pointer"
            onClick={() => setOpenIndex(index)}
          >
            <span className="font-semibold">{cat.category}</span>
            <span>{openIndex === index ? "⬆️" : "⬇️"}</span>
          </div>

          {/* Items */}
          {openIndex === index && (
            <div className="p-4">
              {cat.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center py-3 border-b">                
                  <div className="flex gap-3 items-center">
                    <img
                      src={item.image}
                      className="w-16 h-16 rounded-md"/>                   
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">₹{item.price}</p>                  
                    </div>
                  </div>
                  <button className="bg-black text-white px-4 py-1 rounded">  Add + </button>                 
                </div>
              ))}
            </div>
          )}

        </div>
      ))}

    </div>
  );
};

export default RestaurantMenu;