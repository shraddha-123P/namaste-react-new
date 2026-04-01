import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  // console.log("Header render");
  return (
    <div className= "bg-amber-50"  >
      <div className="logo-container">       
        <img className="w-56" src={LOGO_URL} />
      </div>
    <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
          Online Status:{onlineStatus ? "✅":"🔴"}
          </li>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to ="/about">About</Link>
          </li>
          <li>
            <Link to ="/contact">Contact</Link>
          </li>
           <li>
            <Link to ="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to ="/cart">Cart</Link>  
          </li>
        
          <button
            className="login"
            onClick={() =>{
              btnNameReact === "Login"
              ? setBtnNameReact("Logout")
              : setBtnNameReact("Login");
            }} >
              {btnNameReact}
            </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;