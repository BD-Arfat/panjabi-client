import React, { useState } from "react";
import { FiHome, FiSettings, FiLogOut } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import Swal from "sweetalert2";
import useTheme from "../../hooks/useTheme";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const { theme } = useTheme();
    
      const {user, logOut} = useAuthContext();
    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you really want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        Swal.fire({
                            title: "Logged Out!",
                            text: "You have successfully logged out.",
                            icon: "success",
                            confirmButtonColor: "#3085d6",
                        });
                    })
                    .catch((error) => {
                        Swal.fire({
                            title: "Logout Failed!",
                            text: error.message,
                            icon: "error",
                            confirmButtonColor: "#d33",
                        });
                    });
            }
        });
    };
    return (
        <div
            className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 p-5 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-64"
                } md:translate-x-0  min-h-screen flex flex-col  dark:bg-gray-900 text-gray-900 dark:text-white transition-all ease-in-out duration-500`}
        >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MdDashboard /> Dashboard
            </h2>
            <ul className="space-y-4">
                <Link to={'/'} className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded cursor-pointer">
                    <FiHome /> Home
                </Link>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded cursor-pointer">
                    <FaUser /> Profile
                </li>
                <Link to={'/dashboard/cart'} className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded cursor-pointer">
                    <RiShoppingCart2Line /> Orders
                </Link>
                <li className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded cursor-pointer">
                    <FiSettings /> Settings
                </li>
                <li onClick={handleLogout} className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded cursor-pointer text-red-400">
                    <FiLogOut /> Logout
                </li>
                <div  className="flex items-center gap-3 p-3">
                    <img src={user?.photoURL} className="rounded-full w-10 h-10" alt="" />
                    <h1 className="font-bold text-lg">{user?.displayName}</h1>
                </div>
            </ul>
        </div>
    );
};

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex min-h-screen ">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <div className="flex-1 md:ml-64 p-6">
                <button
                    className="md:hidden mb-4 bg-gray-900 text-white p-2 rounded"
                    onClick={toggleSidebar}
                >
                    ☰
                </button>
                <div className={`min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all ease-in-out duration-500`}>
                <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
