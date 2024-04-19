import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import ReactMarkdown from 'react-markdown';
import { addProductToCart, removeProductFromCart } from "../redux/actions/productActions";

const ProductComponent = (props) => {
    const dispatch = useDispatch();

    const handleAddToCartClick = (event, product) => {
        console.log('inside handleAddToCartClick');
        dispatch(addProductToCart(product));
    };

    const handleDeleteFromCartClick = (evenet, product) => {
        console.log('inside delete from cart');
        dispatch(removeProductFromCart(product));
    };

    const renderList = (props.products) ? props.products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="product mt-8 bg-white rounded-md pt-5 pb-5 shadow hover:shadow-2xl hover:shadow-yellow-200 border-4 border-slate-300 hover:border-yellow-500" key={id}>
                <div className="flex flex-col h-full items-center hover:opacity-75">
                    <Link to={`/product/${id}`}>
                        <div className="relative inline-block h-64 w-48 pr-2 pl-2">
                                <img
                                    src={image}
                                    alt="product-display"
                                    className="object-contain h-full w-full transition ease-in-out duration-150"
                                />
                        </div>
                    </Link>

                    <div className="flex-grow flex flex-col border-t-2 pr-5 pl-5">
                        <ReactMarkdown
                            children={title}
                            className="block text-xl font-semibold leading-tight mt-4"
                        />
                        <div className="flex-grow" />
                        <div className="product-price mb-5">
                            <div className="text-gray-800 text-xl mt-1">${price.toFixed(2)}</div>
                            <div className="text-gray-500 text-lg mt-1">{category}</div>
                        </div>
                        <div>

                            {
                                (props.remove === true)
                                    ?
                                    <button
                                        type="button"
                                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                                        onClick={(event)=> handleDeleteFromCartClick(event, product)}
                                    >
                                        Remove From Cart
                                    </button>
                                    :
                                    <button
                                        type="button"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                        onClick={(event)=> handleAddToCartClick(event, product)}
                                    >
                                        Add To Cart
                                    </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }) : [];

    return (
            <>{renderList}</>
    );
};

export default ProductComponent;
