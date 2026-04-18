
import React, { lazy, Suspense }from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import RestaurantCard from "./components/RestaurantCard";
import  RestaurantMenu  from "./components/RestaurantMenu";
import "../index.css";
// on demand loading 
// chunking / Code spliting / lazy loading / on demand loading / dynamic import
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(()=> import("./components/Grocery"));
const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header/>
      <Outlet />
    </div>
    </Provider>
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
    path: "/grocery",
    element: (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Grocery/>
    </Suspense>
    ),
  },
  {
    path: "/restaurants/:resId",
    element:<RestaurantMenu/>,
  },
],
errorElement: <Error />,
},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)
;
 









