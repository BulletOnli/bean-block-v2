import React from "react";
import { HiOutlineMailOpen } from "react-icons/Hi";
import { BsFacebook, BsInstagram } from "react-icons/Bs";
import { FaShopify } from "react-icons/Fa";

const Footer = () => {
    return (
        <div className="relative w-full text-white p-4 grid grid-cols-3 items-center justify-items-center bg-[#161F2B]">
            <div className="w-full flex flex-col px-8">
                <h1 className="uppercase text-md lg:text-2xl font-bold">
                    Bean Block
                </h1>
                <p className="text-[13px] my-1 text-[#7C7C8C]">
                    We offer a wide variety of coffee beans as well as drip
                    coffees
                </p>
                <button className="w-max text-sm px-4 py-1 my-2 border-white border-[1px]">
                    Contact us
                </button>
            </div>
            <div className="w-full flex justify-center items-center ">
                <BsFacebook className="text-2xl mx-4 hover:text-[#FF7B00] cursor-pointer" />
                <BsInstagram className="text-2xl mx-4 hover:text-[#FF7B00] cursor-pointer" />
                <FaShopify className="text-2xl mx-4 hover:text-[#FF7B00] cursor-pointer" />
            </div>
            <div className="w-full flex text-[#7C7C8C] flex-col items-center">
                <h1 className="uppercase text-white text-md lg:text-xl font-bold">
                    About us
                </h1>
                <p className="text-sm my-1">
                    📍119 Gloria Diaz St., BF Resort Village, Las Piñas
                </p>
                <div className="flex text-sm justify-center">
                    <HiOutlineMailOpen className="text-xl mx-1" />
                    <p>beanblockventures@gmail.com</p>
                </div>
                <p className="text-[13px] my-2">
                    ©2022 Bean Block, All rights reserved.
                </p>
            </div>

            <small className="absolute bottom-0 text-[#7C7C8C] uppercase font-semibold text-[10px] p-2">
                Created by Bullet
            </small>
        </div>
    );
};

{
    /* <small className="text-[#7C7C8C]">
                    @2023 Bean Block. All Rights Reserved
                </small> */
}

export default Footer;
