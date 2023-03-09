import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";

const DashboardLayout = () => {
  return (
    <div>
      <NavBar />

      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">


          {/* <!-- Page content here --> */}
          <Outlet/>
        </div>


        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">

            {/* Side bar item  */}
            <li>
                <Link to='/v3/dashboard'>My Order</Link>
            </li>
            <li>
                <Link to='/v3/dashboard/allsellers'>All Sellers</Link>
            </li>
            <li>
                <Link to='/v3/dashboard/allbuyers'>All Buyers</Link>
            </li>
            <li>
                <Link to='/v3/dashboard/reported'>Reported Item</Link>
            </li>
            <li>
                <Link to='/v3/dashboard/addAProduct'>Add Product</Link>
            </li>
            <li>
                <Link to='/v3/dashboard/myProduct'>MyProduct</Link>
            </li>
            <li>
                <Link to='/v3/dashboard/myBuyer'>My Buyers</Link>
            </li>
          

          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
