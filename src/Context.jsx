import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import productData from "./productData";

const Context = React.createContext();

const initialState = {
    productData: productData,
    cartItems: [],
    totalItems: 0,
    totalAmount: 0,
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, price) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, price } });
    };

    const removeToCart = (id) => {
        dispatch({ type: "REMOVE_TO_CART", payload: id });
    };

    const placeOrder = () => {
        dispatch({ type: "PLACE_ORDER" });
    };

    const addQuantity = (id) => {
        dispatch({ type: "ADD_QUANTITY", payload: id });
    };

    const removeQuantity = (id) => {
        dispatch({ type: "REMOVE_QUANTITY", payload: id });
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
