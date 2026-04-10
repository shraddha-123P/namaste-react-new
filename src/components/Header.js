import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // Subscribing to the store using a selector 
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
  <div className="bg-amber-50 shadow-sm">
  <div className="flex justify-between items-center px-8 py-2">
    
    {/* Logo */}
    <img className="w-28" src={LOGO_URL} alt="logo" />

    {/* Nav */}
    <ul className="flex items-center gap-8 text-base font-semibold">
      
      <li>
        Online Status: {onlineStatus ? "✅" : "🔴"}
      </li>

      <li className="hover:text-orange-500">
        <Link to="/">Home</Link>
      </li>

      <li className="hover:text-orange-500">
        <Link to="/about">About</Link>
      </li>

      <li className="hover:text-orange-500">
        <Link to="/contact">Contact</Link>
      </li>

      <li className="hover:text-orange-500">
        <Link to="/grocery">Grocery</Link>
      </li>

      <li className="hover:text-orange-500">
        <Link to="/cart">Cart - ({cartItems.length} items)</Link>
      </li>

      <button className="bg-orange-400 text-white px-4 py-1 rounded-md hover:bg-orange-500"
      onClick={()=>{
        btnNameReact === "Login"
        ? setBtnNameReact("Logout")
        : setBtnNameReact ("Login");
      }}
      >
        {btnNameReact}
      </button>

    </ul>
  </div>
</div>
  );
};
export default Header;