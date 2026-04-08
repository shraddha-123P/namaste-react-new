import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

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
        <Link to="/cart">Cart</Link>
      </li>

      <button className="bg-orange-400 text-white px-4 py-1 rounded-md hover:bg-orange-500">
        {btnNameReact}
      </button>

    </ul>
  </div>
</div>
  );
};
export default Header;