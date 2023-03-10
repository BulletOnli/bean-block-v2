import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-full sticky top-0 flex justify-between p-4 lg:px-6 bg-[#ff9100] z-10 shadow-md">
            <Link to="/">
                <p className="uppercase text-white text-md lg:text-xl font-bold tracking-wider">
                    Bean Block
                </p>
            </Link>
            <Link to="/cart">
                <p className="uppercase text-white text-md lg:text-xl font-bold tracking-wider">
                    Shopping cart
                </p>
            </Link>
        </div>
    );
};

export default Navbar;
