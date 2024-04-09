import React, {useEffect} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
    const products = useSelector((state) => state);
    console.log('products', products)

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((error)=>{
                console.log('Error: ', error);
            });
        console.log('Response: ', response);
    };

    useEffect(() => {
        fetchProducts().then(()=>{
            // do something
        });
    }, []);

    return (
        <div className="ui grid container" style={{marginTop:"25px"}}>
            <ProductComponent />
        </div>
    );
};

export default ProductListing;