import React from "react";
import { Link } from "react-router-dom";
import headerImg from "/images/extra3.jpg";
import headerBg from "/images/bg3.jpg";

const Header = () => {
    return (
        <div className="w-full h-[30rem] lg:h-screen mx-auto  flex flex-col">
            <div
                style={{
                    backgroundImage:
                        'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url("./images/bg1.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="w-full h-[20rem] lg:h-[90%] shadow-custom grid grid-cols-1 lg:grid-cols-custom rounded-b-[2rem] lg:rounded-b-[4rem] lg:justify-center"
            >
                <div className="w-full flex flex-col items-center justify-center ">
                    <h1
                        className="uppercase text-white text-4xl lg:text-[4.5rem] font-bold lg:tracking-wide mb-5"
                        style={{
                            fontFamily: "Kanit",
                        }}
                    >
                        Bean Block
                    </h1>
                    <h3 className="uppercase text-[#adb5bd] text-sm lg:text-lg tracking-[3px]">
                        Coffee Roasters
                    </h3>
                    <div className="w-full flex justify-center items-center my-4 lg:my-7">
                        <Link to="/products">
                            <button className="text-sm text-[#e0fbfc] lg:text-base font-medium py-1 px-2 lg:py-[6px] lg:px-3 mx-4 bg-[#E16504] rounded-md shadow-3xl">
                                Order Now
                            </button>
                        </Link>

                        <button className="text-sm text-white lg:text-base lg:font-medium py-1 px-3 lg:py-[6px] lg:px-4 mx-4 border-[1px] border-white rounded-md">
                            About Us
                        </button>
                    </div>
                </div>
                <div className="w-full hidden lg:flex lg:justify-center">
                    <img
                        src={headerImg}
                        alt=""
                        className="w-[18rem] lg:w-[32rem] lg:h-[40rem] lg:mt-[-10rem] lg:mr-[5rem] lg:rounded-3xl"
                        style={{
                            boxShadow: "0 2px 8px 3px rgba(0, 0, 0, 0.5)",
                        }}
                    />
                </div>
            </div>
            <div className="w-full flex justify-center my-5 lg:my-6 p-4">
                <p className="text-[#22333b] text-sm lg:text-base tracking-wider">
                    We offer a wide variety of coffee beans as well as drip
                    coffees
                </p>
            </div>
        </div>
    );
};

export default Header;
