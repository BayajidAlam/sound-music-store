import { createBrowserRouter } from "react-router-dom";
import Category from "../../components/Category/Category";
import ViewDetails from "../../components/ViewDetails/ViewDetails";
import Main from "../../Layout/Main";
import Second from "../../Layout/Second";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/category/:name',
        element: <Category/>,
        loader: ({params}) => fetch(`http://localhost:5000/category?name=${params.name}`)
      },
      {
        path: '/viewDetails/:id',
        element: <ViewDetails/>,
        loader: ({params}) => fetch(`http://localhost:5000/viewDetails?id=${params.id}`)
      }
    ],
  },
  {
    path: "/v2",
    element: <Second></Second>,
    children: [
      {
        path: "/v2/login",
        element: <Login />,
      },
      {
        path: "/v2/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
]);

export default router;
