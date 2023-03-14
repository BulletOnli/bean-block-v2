import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/Fa";
import { useGlobalContext } from "../Context";

const Navbar = ({ isScrolling }) => {
    const { setIsScrolling } = useGlobalContext();
    return (
        <div
            style={{
                backgroundColor: isScrolling ? "#ff9100" : "transparent",
                boxShadow: isScrolling ? "0 0 6px rgba(0, 0, 0, 0.5)" : "",
                transition: "0.1s ease-in",
            }}
            className="w-full fixed top-0 flex justify-between p-4 lg:px-6 z-10"
        >
            <Link to="/" onClick={() => setIsScrolling(!isScrolling)}>
                <p className="uppercase text-white text-md lg:text-xl font-bold tracking-wider">
                    Bean Block
                </p>
            </Link>
            <Link to="/cart" className="flex items-center px-4">
                <FaShoppingCart className="mx-2 text-2xl text-white" />
                <p className="text-white text-md lg:text-lg font-semibold">
                    Cart
                </p>
            </Link>
        </div>
    );
};

export default Navbar;
