import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactMarkdown from 'react-markdown';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    const renderList = (products) ? products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="product mt-8 bg-white rounded-md pt-5 pb-5 shadow hover:shadow-2xl hover:shadow-yellow-200 border-4 border-slate-300 hover:border-yellow-500" key={id}>
                <Link to={`/product/${id}`} className="flex flex-col h-full items-center hover:opacity-75">
                    <div className="relative inline-block h-64 w-48 pr-2 pl-2">
                            <img
                                src={image}
                                alt="product image"
                                className="object-contain h-full w-full transition ease-in-out duration-150"
                            />
                    </div>

                    <div className="flex-grow flex flex-col border-t-2 pr-5 pl-5">
                        <ReactMarkdown
                            children={title}
                            className="block text-xl font-semibold leading-tight mt-4"
                        />
                        <div className="flex-grow" />
                        <div className="product-price">
                            <div className="text-gray-800 text-xl mt-1">${price.toFixed(2)}</div>
                            <div className="text-gray-500 text-lg mt-1">{category}</div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }) : [];

    return (
            <>{renderList}</>
    );
};

export default ProductComponent;
