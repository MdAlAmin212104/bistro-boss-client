import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [ isAdmin ] = useAdmin()
  const [cart] = useCart()
  const handleLogout = () => {
    logout();
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {/* <li><NavLink to='/'>CONTACT US</NavLink></li>
            <li><NavLink to='/'>DASHBOARD</NavLink></li> */}
      <li>
        <NavLink to="/menu">OUR MENU</NavLink>
      </li>
      <li>
        <NavLink to="/order">OUR SHOP</NavLink>
      </li>
      {
        user && isAdmin && <li><NavLink to="/dashboard/adminHome">Dashboard</NavLink></li>
      }
      {
        user && !isAdmin && <li><NavLink to="/dashboard/userHome">Dashboard</NavLink></li>
      }
      <li>
        <Link to="/dashboard/cart">
          <button className="btn">
          <FaShoppingCart />
            <div className="badge badge-secondary">{cart.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <button onClick={handleLogout} className="btn">
            logout
          </button>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">login</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-40 bg-opacity-30 bg-black text-white max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <h1 className="btn btn-ghost text-xl">
          BISTRO BOSS <br />
          Restaurant
        </h1>
      </div>
      <div className="navbar-end hidden lg:flex items-center">
        <ul className="menu menu-horizontal  px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
