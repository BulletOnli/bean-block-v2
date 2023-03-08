import React from "react";

const ProductCard = (props) => {
    return (
        <div className="w-[13rem] h-max relative flex flex-col my-4 rounded-lg overflow-hidden shadow-custom">
            <div className="absolute top-2 left-2 text-sm font-medium px-2 py-[2px] bg-white text-black  rounded-[4px]">
                ₱{props.data.price}
            </div>
            <img
                src={props.data.img}
                alt=""
                className="w-full h-[12rem] object-cover aspect-square"
            />
            <p className="text-xs text-[#7C7C8C] tracking-widest px-4 mt-2 mb-1">
                {props.data.roastType}
            </p>
            <h2 className="text-lg lg:text-base font-bold mb-2 lg:mb-1 px-4">
                {props.data.productName}
            </h2>
            <button className="w-max text-xs text-white bg-[#FB5607] hover:bg-[#fb5407c4] lg:font-medium mx-auto mb-3 py-[5px] px-3 lg:py-[5px] lg:mt-2 rounded-[4px]">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
