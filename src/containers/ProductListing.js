import React, {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";
import {setProducts} from "../redux/actions/productActions";

const ProductListing = () => {
    const products = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        try {
            const response = await axios
                .get("https://fakestoreapi.com/products")
                .catch((error) => {
                    console.log('Error requesting products: ', error);
                });
            dispatch(setProducts(response.data));
        }
        catch(error) {
            console.log("Error fetching products: ", error);
        }
    };

    useEffect(() => {
        fetchProducts().then();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-5xl mt-3 flex content-start">Products</h1>
            <div className="popular-products text-sm sm:flex sm:flex-col sm:items-center md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-4 gap-12 pb-16 md:items-stretch">
                <ProductComponent products={products} />
            </div>
        </div>
    );
};

export default ProductListing;