import { useDispatch } from "react-redux";
import { addItem } from "../util/cartSlice";
import MENU_DATA from "../utils/menuData";

const ItemList = ({ items, dummy}) => {
  const dispatch = useDispatch();

  const handleAddItem = (items) => {
  // Dispatch an action
  dispatch(addItem(items));
};
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
                  <button className="bg-black text-white px-4 py-1 rounded"
                  onClick={handleAddItem(item)}>  Add + </button>                 
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

    </div>
  );
};
    return <div> Category Items</div>;

export default ItemList;