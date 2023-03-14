import React, { useContext, useReducer, useState } from "react";
import reducer from "./reducer";
import productData from "./productData";

const Context = React.createContext();

const initialState = {
    productData: productData,
    cartItems: [],
    totalItems: 0,
    totalAmount: 0,
    modalOpen: false,
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isScrolling, setIsScrolling] = useState(false);

    const addToCart = (id, price) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, price } });
    };

    const removeToCart = (id) => {
        dispatch({ type: "REMOVE_TO_CART", payload: id });
    };

    const addQuantity = (id) => {
        dispatch({ type: "ADD_QUANTITY", payload: id });
    };

    const removeQuantity = (id) => {
        dispatch({ type: "REMOVE_QUANTITY", payload: id });
    };

    const placeOrder = () => {
        dispatch({ type: "PLACE_ORDER" });
    };

    return (
        <Context.Provider
            value={{
                ...state,
                addToCart,
                removeToCart,
                placeOrder,
                addQuantity,
                removeQuantity,
                isScrolling,
                setIsScrolling,
            }}
        >
            {children}
        </Context.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(Context);
};

export { Context, AppProvider, useGlobalContext };
