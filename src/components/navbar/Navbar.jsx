import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { ShoppingCart, LogOut, CircleUserRound, UserPlus, LayoutGrid, UserRoundCheck } from 'lucide-react';
import { useSelector } from "react-redux";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem('users'));
    const navigate = useNavigate();
    const [visible, setvisible] = useState(false);
    const cartItems = useSelector((state) => state.cart);

    const logout = () => {
        localStorage.clear('users');
        navigate("/login");
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setvisible(!visible);
    }

    const navList = (
        <ul className="flex lg:flex-row space-x-2 lg:space-x-3 text-white font-medium text-md px-5 lg:px-0 md:">
            <li>
                <Link to={'/allproduct'}>
                    <LayoutGrid className="w-8 h-8"/>
                </Link>
            </li>

            {!user && (
                <>
                    <li>
                        <Link to={'/signup'}>
                            <UserPlus className="w-8 h-8"/>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/login'}>
                            <UserRoundCheck className="w-8 h-8"/>
                        </Link>
                    </li>
                </>
            )}

            {user?.role === "user" && (
                <li>
                    <Link to={'/user-dashboard'}>
                        <CircleUserRound className="w-8 h-8" />
                    </Link>
                </li>
            )}

            {user?.role === "admin" && (
                <li>
                    <Link to={'/admin-dashboard'}>Admin</Link>
                </li>
            )}

            <li>
                <Link to={'/cart'} className="flex items-center justify-center mr-2">
                    <ShoppingCart className="w-8 h-8" />
                    {user && (
                        <h3 className={`bg-red-500 rounded-2xl py-0 absolute right-[70px] lg:right-[55px] top-1 px-[7px]`}>
                            {cartItems.length}
                        </h3>
                    )}
                </Link>
            </li>

            {user && (
                <li className="cursor-pointer" onClick={logout}>
                    <LogOut className="w-8 h-8" />
                </li>
            )}
        </ul>
    );

    return (
        <nav className="bg-blue-600 sticky top-0 w-full overflow-x-auto">
            <div className="flex justify-between items-center py-3 px-3 w-full">
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <Link to={'/'} className="flex items-center">
                        <img src="./logo.png" className="w-10 h-10 object-contain" alt="logo" />
                        <h2 className="font-bold text-white text-xl ml-2">D-PARINDA</h2>
                    </Link>
                   {!visible ? (
                     <button className="text-white lg:hidden ml-4" onClick={toggleDropdown}>
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                     </svg>
                 </button>
                   ) : 
                   ("")}
                </div>
                {/* <div className="hidden lg:block lg:flex-grow">
                    <SearchBar />
                </div> */}
                <div className={`right flex-col lg:flex-row ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
                    {navList}
                </div>
            </div>
            {/* {isOpen && (
                <div className="lg:hidden px-3 mt-2">
                    <SearchBar />
                </div>
            )} */}
        </nav>
    );
}

export default Navbar;
