import {
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";
import { MdOutlineReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  // todo : get Admin from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* dashboard asidebar */}
      <div className="w-64 min-h-full bg-[#D1A054]">
        <ul className="menu pl-4">
          {isAdmin && isAdmin.admin === true ? 
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <FaUtensils />
                  Add items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItem">
                  <FaList />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook />
                  Manage bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
              
            </>
           : 
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaCalendar />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <MdOutlineReviews />
                  Reviews
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart />
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaList />
                  Payment Real History
                </NavLink>
              </li>
            </>
          }

          {/* shared NavLinks */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <LuMenuSquare />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content sidebar */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
