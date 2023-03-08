import { createBrowserRouter } from "react-router-dom";
import Category from "../../components/Category/Category";
import ViewDetails from "../../components/ViewDetails/ViewDetails";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Second from "../../Layout/Second";
import AddAProduct from "../../Pages/AddAProduct/AddAProduct";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import PaymentFail from "../../Pages/PaymentFail/PaymentFail";
import PaymentSuceess from "../../Pages/PyamentSuccess/PaymentSuceess";
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
        element: <PrivateRoute><ViewDetails/></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/viewDetails?id=${params.id}`)
      },
      {
        path: '/blogs',
        element: <Blogs/>
      },
      {
        path:'/payment/success',
        element: <PaymentSuceess/>
      },
      {
        path: 'payment/fail',
        element: <PaymentFail/>
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
    path: "/v3/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout/>
      </PrivateRoute>
    ),
    children: [
      {
        path: '/v3/dashboard',
        element: <MyOrders/>
      },
      {
        path: '/v3/dashboard/addProduct',
        element: <AddAProduct/>
      }
    ]
  }
]);

export default router;
