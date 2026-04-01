import React, { lazy }from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
// import RestaurantCard from "./components/RestaurantCard";
import  RestaurantMenu  from "./components/RestaurantMenu";

// on demand loading 
// chunking / Code spliting / lazy loading / on demand loading / dynamic import

const Grocery = lazy(()=> import("./components/Grocery"));
const AppLayout = () => {
  return (
    <div className="app">
      <h1>Food Villa</h1>
      <Header/>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children : [
  {
    path: "/",
    element: <Body/>,
  },     
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/restaurants/:resId",
    element:<RestaurantMenu/>,
  },
  {
    path: "/grocery",
    element: <Grocery/>,
  }
],
errorElement: <Error />,
},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}   />);
 