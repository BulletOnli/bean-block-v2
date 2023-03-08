import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import productData from "./productData";

const Context = React.createContext();

const initialState = {};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Context.Provider value={{}}>{children}</Context.Provider>;
};

const useGlobalContext = () => {
    return useContext(Context);
};

export { Context, AppProvider, useGlobalContext };
