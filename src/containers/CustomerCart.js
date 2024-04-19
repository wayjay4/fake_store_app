import React from "react";
import ProductComponent from "./ProductComponent";
import {useSelector} from "react-redux";
const CustomerCart = ()=> {
    const products = useSelector(state => state.cart);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-5xl mt-3 flex content-start">Your Cart</h1>
            <div className="customer_cart text-sm sm:flex sm:flex-col sm:items-center md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-4 gap-12 pb-16 md:items-stretch">
                {
                    (products)
                    ? <ProductComponent products={products} remove={true} />
                    : 'Your cart is empty.'
                }
            </div>
        </div>
    );
};

export default CustomerCart;