import ItemList from "./ItemList";

const RestaurantCategory = ({data})=>{
    console.log(data);
    return (
        <div>
          {/* {Header} */}
          Res Cuisine Category
          {/* {Accordion Body} */}
          <ItemList items={data.itemCards}/>
        </div>
    );
};
export default RestaurantCategory;