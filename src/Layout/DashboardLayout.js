import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";

import useSeller from "../hooks/useSeller";
import NavBar from "../Shared/NavBar/NavBar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  // check user role
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

  return (
    <div>
      <NavBar />

      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>

        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* Side bar item  */}
            { isBuyer && (
              <>
                <li>
                  <Link to="/v3/dashboard/myOrder">My Order</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link to="/v3/dashboard/allsellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/v3/dashboard/allbuyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="/v3/dashboard/reported">Reported Item</Link>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <li>
                  <Link to="/v3/dashboard/addProduct">Add Product</Link>
                </li>
                <li>
                  <Link to="/v3/dashboard/myProduct">MyProduct</Link>
                </li>
                <li>
                  <Link to="/v3/dashboard/myBuyer">My Buyers</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
