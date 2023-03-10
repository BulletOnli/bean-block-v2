import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";

const Cart = () => {
    const { cartItems } = useGlobalContext();

    return (
        <>
            <div className="w-full sticky top-0 flex justify-between p-4 lg:px-6 bg-[#ff9100] z-10 shadow-md">
                <Link to="/">
                    <p className="uppercase text-white text-md lg:text-xl font-bold tracking-wider">
                        Bean Block
                    </p>
                </Link>
            </div>
            <main className="w-full flex flex-col lg:flex-row gap-4 lg:justify-center p-4 lg:p-8">
                <div className="w-full min-h-[41rem] flex flex-col py-6 px-8 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl text-[#FB5607] font-bold mb-8">
                        Shopping Cart
                    </h2>

                    <div className="w-full flex flex-col gap-4">
                        <div className="w-full flex">
                            <div className="w-[25rem] font-bold">
                                Product Name
                            </div>
                            <p className="w-[8rem] text-center font-bold">
                                Unit Price
                            </p>
                            <p className="w-[8rem] text-center font-bold">
                                Quantity
                            </p>
                            <p className="w-[8rem] text-center font-bold">
                                Total Price
                            </p>
                            <p className="w-[8rem] text-center font-bold">
                                Actions
                            </p>
                        </div>
                        {/* items start here */}
                        {cartItems.map((item) => {
                            return (
                                <div className="w-full flex ">
                                    <div className="w-[25rem]">
                                        {item.productName}
                                    </div>
                                    <p className="w-[8rem] text-center">
                                        {item.price}
                                    </p>
                                    <p className="w-[8rem] text-center">-</p>
                                    <p className="w-[8rem] text-center">-</p>
                                    <button className="w-[8rem] text-[#FB5607] font-bold">
                                        Delete
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="w-full lg:w-[40rem] flex flex-col gap-4">
                    <div className="w-full p-4 bg-white rounded-lg shadow-md">
                        <h1 className="text-xl font-bold text-center mb-2">
                            Order details
                        </h1>

                        <p className="text-lg font-bold my-1">
                            Total Items: <span>12</span>
                        </p>
                        <p className="text-lg font-bold my-1">
                            Total Amount: <span>1200</span>
                        </p>
                    </div>
                    <div className="w-full min-h-[20rem] lg:max-h-[30rem] p-4 bg-white rounded-lg shadow-md">
                        <h1 className="text-xl font-bold text-center mb-5">
                            Payment Method
                        </h1>
                    </div>
                    <button className="w-full p-2 text-white bg-[#FB5607] rounded-md shadow-md">
                        Place Order
                    </button>
                </div>
            </main>
        </>
    );
};

export default Cart;
