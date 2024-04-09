import React, {useEffect} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import ProductComponent from "./ProductComponent";
import {setProducts} from "../redux/actions/productActions";

const ProductListing = () => {
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((error)=>{
                console.log('Error: ', error);
            });
        dispatch(setProducts(response.data));
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