import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";

const SuccessPopup = () => {
    const { placeOrder } = useGlobalContext();

    const divStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur( 2px )",
        boxShadow: "0 0 6px rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div style={divStyle}>
            <div className="relative w-[35rem] h-[22rem] bg-white flex flex-col items-center justify-center shadow-md rounded-lg">
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
                        className="px-8 py-2 my-4 text-sm font-medium uppercase rounded-md text-white bg-[#FB5607]"
                        onClick={placeOrder}
                    >
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SuccessPopup;
