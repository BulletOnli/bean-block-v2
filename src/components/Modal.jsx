import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";

const backdropStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "#000000e1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.7,
            type: "spring",
            damping: 25,
        },
    },
    exit: {},
};

const Modal = () => {
    const { placeOrder } = useGlobalContext();

    return (
        <div
            style={backdropStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                onClick={(e) => e.stopPropagation()}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative w-[35rem] h-[22rem] bg-white flex flex-col items-center justify-center shadow-md rounded-lg"
            >
                <h1 className="mt-4 text-2xl font-bold">
                    Your Order has been received
                </h1>
                <img
                    src="images/check.png"
                    alt=""
                    className="w-[5rem] mt-[3rem]"
                />
                <h2 className="text-xl my-4 font-semibold">
                    Thank you for your purchase !
                </h2>
                <p className="text-sm text-center">
                    You will recieve an order confirmation email with details of
                    you order.
                </p>
                <Link to="/products">
                    <button
                        className="px-8 py-2 my-4 text-sm font-medium uppercase rounded-md text-white bg-[#FF7B00] hover:bg-[#ff9100]"
                        onClick={placeOrder}
                    >
                        Continue Shopping
                    </button>
                </Link>
            </motion.div>
        </div>
    );
};

export default Modal;
