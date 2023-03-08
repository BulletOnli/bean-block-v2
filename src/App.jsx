import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
// import Cart from "./pages/Cart";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                {/* <Route path="/cart" element={<Cart />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
