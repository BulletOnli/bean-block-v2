import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
import coffee1 from "/images/product1.jpg";

const BestSellerItems = () => {
    const { setIsScrolling } = useGlobalContext();
    const containerRef = useRef(null);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > containerRef.current.offsetTop - 100) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full flex flex-col items-center py-4 lg:mb-[5rem]"
        >
            <h1 className="text-3xl lg:text-[2.2rem] font-bold mb-8 lg:mb-16 tracking-[2px]">
                Our Best Seller
            </h1>
            <div className="w-[75%] grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-4 justify-items-center my-4">
                {/* col 1 */}
                <div className="w-[16rem] h-[22rem] flex flex-col rounded-2xl overflow-hidden shadow-custom">
                    <img
                        src={coffee1}
                        alt=""
                        className="w-full h-[15rem] object-cover aspect-square"
                    />
                    <h2 className="text-lg font-bold mx-auto mt-3">
                        Vibrant Hazelnut
                    </h2>
                    <p className="text-xs text-[#333138] tracking-widest mx-auto mb-2">
                        Medium Roast
                    </p>
                    <Link to="/products" className="mx-auto">
                        <button className="w-max text-white text-xs lg:text-[14px] font-medium py-1 lg:py-[6px] px-3 lg:mt-2 mx-auto bg-[#FB5607] rounded-md">
                            Buy Now
                        </button>
                    </Link>
                </div>
                {/* col 2 */}
                <div className="w-[16rem] h-[22rem] flex flex-col rounded-2xl overflow-hidden shadow-custom">
                    <img
                        src={coffee1}
                        alt=""
                        className="w-full h-[15rem] object-cover aspect-square"
                    />
                    <h2 className="text-lg font-bold mx-auto mt-3">
                        Vibrant Hazelnut
                    </h2>
                    <p className="text-xs text-[#333138] tracking-widest mx-auto mb-2">
                        Medium Roast
                    </p>
                    <Link to="/products" className="mx-auto">
                        <button className="w-max text-white text-xs lg:text-[14px] font-medium py-1 lg:py-[6px] px-3 lg:mt-2 mx-auto bg-[#FB5607] rounded-md">
                            Buy Now
                        </button>
                    </Link>
                </div>
                {/* col 3 */}
                <div className="w-[16rem] h-[22rem] flex flex-col rounded-2xl overflow-hidden shadow-custom">
                    <img
                        src={coffee1}
                        alt=""
                        className="w-full h-[15rem] object-cover aspect-square"
                    />
                    <h2 className="text-lg font-bold mx-auto mt-3">
                        Vibrant Hazelnut
                    </h2>
                    <p className="text-xs text-[#333138] tracking-widest mx-auto mb-2">
                        Medium Roast
                    </p>
                    <Link to="/products" className="mx-auto">
                        <button className="w-max text-white text-xs lg:text-[14px] font-medium py-1 lg:py-[6px] px-3 lg:mt-2 mx-auto bg-[#FB5607] rounded-md">
                            Buy Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BestSellerItems;
