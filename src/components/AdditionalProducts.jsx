import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/Ai";

const AdditionalProducts = () => {
    return (
        <div className="w-full h-[110rem] lg:h-[80rem] flex flex-col items-center">
            {/* row 1 */}
            <div className="w-full h-[40rem] flex flex-col lg:flex-row items-center p-4 lg:px-[10rem]">
                <img
                    src="/images/extra5.jpg"
                    alt=""
                    className="w-[16rem] lg:w-[18rem] rounded-2xl mb-8 lg:mb-0 shadow-custom"
                />
                <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-start lg:px-12">
                    <h1 className="text-2xl lg:text-[2.3rem] font-bold mb-4 lg:mb-6">
                        Bean Block Gift Bag
                    </h1>
                    <p className="text-sm lg:text-base text-[#333138] font-light">
                        All coffee bean purchases from our store will be housed
                        in this new gift bag, making it an easy and perfect
                        giveaway to anyone-- be it for a friend, a special
                        someone, or just yourself. You deserve good things too,
                        you know.
                    </p>
                    <Link to="/products">
                        <button className="text-sm  lg:text-base text-white lg:font-medium shadow-custom py-1 px-4 my-4 bg-[#FB5607] rounded-md shadow-3xl">
                            Buy Now
                        </button>
                    </Link>
                </div>
            </div>

            {/* row 2 */}
            <div className="w-full h-[40rem] flex flex-col-reverse lg:flex-row items-center p-4 lg:px-[10rem]">
                <div className="w-full flex flex-col items-center lg:items-end text-center lg:text-end lg:px-12">
                    <h1 className="text-2xl lg:text-[2.3rem] font-bold mb-4 lg:mb-6">
                        Coffee Sauce
                    </h1>
                    <p className="text-sm lg:text-base text-[#333138] font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis aliquid exercitationem, mollitia sapiente,
                        facilis doloribus omnis rerum magni sit vero quisquam
                        voluptates tempore accusamus laudantium!
                    </p>
                    <Link to="/products">
                        <button className="text-sm lg:text-base text-white lg:font-medium py-1 px-4 my-4 bg-[#FB5607] rounded-md shadow-3xl">
                            Buy Now
                        </button>
                    </Link>
                </div>
                <img
                    src="/images/liquid1.jpg"
                    alt=""
                    className="w-[16rem] lg:w-[18rem] rounded-2xl mb-8 lg:mb-0 shadow-custom"
                />
            </div>

            {/* row 3 */}
            <div className="w-full h-[40rem] flex flex-col lg:flex-row items-center p-4 lg:px-[10rem]">
                <img
                    src="/images/liquid2.jpg"
                    alt=""
                    className="w-[16rem] lg:w-[18rem] rounded-2xl mb-8 lg:mb-0 shadow-custom"
                />
                <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-start lg:px-12">
                    <h1 className="text-2xl lg:text-[2.3rem] font-bold mb-4 lg:mb-6">
                        Coffee Syrup
                    </h1>
                    <p className="text-sm lg:text-base text-[#333138] font-light">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Unde sed harum ea velit minima, hic quam aliquid!
                        Consequuntur, nemo dicta nam eum delectus odit
                        consequatur?
                    </p>
                    <Link to="/products">
                        <button className="text-sm lg:text-base text-white lg:font-medium py-1 px-4 my-4 bg-[#FB5607] rounded-md shadow-3xl">
                            Buy Now
                        </button>
                    </Link>
                </div>
            </div>

            <Link to="/products">
                <button className="py-2 px-6 mt-[5rem] flex items-center text-white font-semibold bg-[#FB5607] rounded-md">
                    Browse all products
                    <AiOutlineArrowRight className="ml-2 text-xl" />
                </button>
            </Link>
        </div>
    );
};

export default AdditionalProducts;
