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

    const addToCart = (id) => {
        dispatch({ type: "ADD_TO_CART", payload: id });
    };

    return (
        <Context.Provider value={{ ...state, addToCart }}>
            {children}
        </Context.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(Context);
};

export { Context, AppProvider, useGlobalContext };
