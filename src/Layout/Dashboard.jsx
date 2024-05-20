import { FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";
import { MdOutlineReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard asidebar */}
            <div className="w-64 min-h-full bg-[#D1A054]">
                <ul className="menu pl-4">
                    <li>
                        <NavLink to='/dashboard/home'>
                        <FaHome/>
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'>
                        <FaCalendar/>
                            Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'>
                        <MdOutlineReviews />
                            Reviews</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'>
                        <FaShoppingCart/>
                            My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/booking'>
                        <FaList/>
                            My Booking</NavLink>
                    </li>
                    <div className="divider"></div> 
                    <li>
                        <NavLink to='/'>
                        <FaHome/>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'>
                        <LuMenuSquare />Menu</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content sidebar */}
            <div className="flex-1">
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;