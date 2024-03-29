import React from "react";
import { useGlobalContext } from "../Context";
import { motion } from "framer-motion";
import { useToast } from "@chakra-ui/react";

const ProductCard = (props) => {
    const { addToCart } = useGlobalContext();
    const toast = useToast();

    const showSuccessToast = () => {
        toast({
            title: "Added to Cart.",
            status: "success",
            duration: 2000,
            isClosable: false,
            position: "bottom-left",
        });
    };

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
            <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                    addToCart(props.data.productId, props.data.price);
                    showSuccessToast();
                }}
                className="w-max text-xs text-white mx-auto bg-[#FB5607] hover:bg-[#fb5407c4] lg:font-medium mb-3 py-[5px] px-3 lg:py-[5px] lg:mt-2 rounded-[4px]"
            >
                Add to Cart
            </motion.button>
        </div>
    );
};

export default ProductCard;
