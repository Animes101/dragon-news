import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../components/NewsDetails";
import PrivetRouter from "../pages/PrivetRouter";


export const router = createBrowserRouter([
  {
    path: "/",
    element:<Root />,
    children:[
        {
            path:'/',
            element:<Home />
        },
        {
          path:'/login',
          element:<Login />
        },
        {
          path:'/signup',
          element:<Register />
        },
        {
          path:'/details/:id',
          element:<PrivetRouter><NewsDetails /></PrivetRouter>
        }
    ]
  },
]);
