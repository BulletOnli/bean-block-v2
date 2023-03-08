import React from "react";
import Navbar from "../components/Navbar";
import coffee1 from "/images/product1.jpg";
import productData from "../productData";
import ProductCard from "../components/ProductCard";

const Products = () => {
    const classicBeans = productData.filter(
        (item) => item.productType === "Classic Coffee Beans"
    );
    const flavoredBeans = productData.filter(
        (item) => item.productType === "Flavored Coffee Beans"
    );

    return (
        <>
            <Navbar />
            <section className="w-full flex flex-col items-center my-8">
                <h1 className="w-full text-2xl text-center lg:text-start font-bold lg:pl-12 tracking-widest mb-4">
                    Classic Coffee Beans
                </h1>
                <div className="w-full grid grid-cols-1 lg:grid-cols-5 justify-items-center px-8">
                    {classicBeans.map((data) => {
                        return <ProductCard data={data} key={data.productId} />;
                    })}
                </div>
            </section>

            <section className="w-full flex flex-col items-center my-8">
                <h1 className="w-full text-2xl text-center lg:text-start font-bold lg:pl-12 tracking-widest mb-4">
                    Flavored Coffee Beans
                </h1>
                <div className="w-full grid grid-cols-1 lg:grid-cols-5 justify-items-center px-8">
                    {flavoredBeans.map((data) => {
                        return <ProductCard data={data} key={data.productId} />;
                    })}
                </div>
            </section>
        </>
    );
};

export default Products;
