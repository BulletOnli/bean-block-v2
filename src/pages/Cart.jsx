import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
// import SuccessPopup from "../components/SuccessPopup";
import Modal from "../components/Modal";

const Cart = () => {
    const {
        cartItems,
        totalItems,
        totalAmount,
        removeToCart,
        placeOrder,
        addQuantity,
        removeQuantity,
        modalOpen,
        isScrolling,
        setIsScrolling,
    } = useGlobalContext();

    return (
        <>
            <div className="w-full sticky top-0 flex justify-between p-4 lg:px-6 bg-[#ff9100] z-10 shadow-md">
                <Link to="/" onClick={() => setIsScrolling(!isScrolling)}>
                    <p className="uppercase text-white text-md lg:text-xl font-bold tracking-wider">
                        Bean Block
                    </p>
                </Link>
            </div>
            <main className="relative w-full flex flex-col lg:flex-row gap-4 lg:justify-center p-4 lg:p-8">
                <div className="w-full min-h-[41.8rem] flex flex-col py-6 px-8 bg-white rounded-lg shadow-md">
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
                        {!cartItems ? (
                            <span className="mx-auto my-8">
                                No Items in the Cart
                            </span>
                        ) : (
                            cartItems.map((item, index) => {
                                return (
                                    <div
                                        className="w-full shadow-custom rounded-md p-1 flex items-center"
                                        key={index}
                                    >
                                        <div className="w-[25rem] lg:px-2 flex">
                                            <p className="mr-3">{index + 1}.</p>
                                            {item.productName}
                                        </div>
                                        <p className="w-[8rem] text-center">
                                            {item.price}
                                        </p>
                                        <div className="w-[8rem] text-center flex justify-center">
                                            <button
                                                onClick={() =>
                                                    removeQuantity(
                                                        item.productId
                                                    )
                                                }
                                                className="px-2 text-[1.1rem]"
                                            >
                                                -
                                            </button>
                                            <p>{item.quantity}</p>
                                            <button
                                                onClick={() =>
                                                    addQuantity(item.productId)
                                                }
                                                className="px-2 text-[1.1rem]"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <p className="w-[8rem] text-center">
                                            {item.totalPrice}
                                        </p>
                                        <button
                                            onClick={() =>
                                                removeToCart(item.productId)
                                            }
                                            className="w-[8rem] text-[#FB5607] font-bold"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
                <div className="w-full lg:w-[40rem] flex flex-col gap-4">
                    <div className="w-full p-4 bg-white rounded-lg shadow-md">
                        <h1 className="text-xl font-bold text-center mb-2 lg:mb-4">
                            Order details
                        </h1>

                        <p className="text-lg font-semibold my-3">
                            Total Items: <span>{totalItems}</span>
                        </p>
                        <p className="text-lg font-semibold my-3">
                            Total Amount: <span>{totalAmount}</span>
                        </p>
                    </div>
                    <div className="w-full p-4 bg-white rounded-lg shadow-md">
                        <h1 className="text-xl font-bold text-center mb-5">
                            Payment Method
                        </h1>
                        <div className="w-full flex flex-col p-2">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="payment-type"
                                    className="mx-4 w-4 h-4"
                                />
                                <label className="text-lg">
                                    Cash on Delivery
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="payment-type"
                                    className="mx-4 w-4 h-4"
                                />
                                <label className="text-lg">Gcash</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="payment-type"
                                    className="mx-4 w-4 h-4"
                                />
                                <label className="text-lg">Online Bank</label>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={placeOrder}
                        className="w-full p-2 text-white bg-[#FF7B00] rounded-md shadow-md hover:bg-[#ff9100]"
                    >
                        Place Order
                    </button>
                </div>

                {/* Pop up modal showing when order is success */}
                {modalOpen && <Modal />}
            </main>
        </>
    );
};

export default Cart;
