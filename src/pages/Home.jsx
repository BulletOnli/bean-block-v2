import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BestSellerItems from "../components/BestSellerItems";
import AdditionalProducts from "../components/AdditionalProducts";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <BestSellerItems />
            <AdditionalProducts />

            <div className="w-full h-[20rem] lg:h-[30rem] flex items-center justify-center">
                <div className="w-[90%] lg:w-[60%] h-[12rem] lg:h-[15rem] flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg">
                    <h1 className="text-2xl lg:text-3xl font-bold">
                        Subscribe our Newslatter
                    </h1>
                    <h3 className="text-sm font-medium text-[#333138] mt-2">
                        Get the latest update about our Products
                    </h3>

                    <span className="w-max flex my-4 lg:mt-7 py-1 px-2 lg:pl-4 border-black border-[1px] rounded-md">
                        <input
                            type="text"
                            className="text-black text-sm w-[12rem] lg:w-[25rem] outline-none"
                            placeholder="Enter your email address"
                        />
                        <button className="text-sm text-white lg:font-medium px-2 py-1 lg:py-2 lg:px-4 bg-[#fb5607] rounded-md">
                            Subscribe
                        </button>
                    </span>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Home;
