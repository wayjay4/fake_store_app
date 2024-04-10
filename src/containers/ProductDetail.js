import React, {useEffect} from "react";
import axios from "axios";
import { selectProduct, removeSelectedProduct } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { productId } = useParams();
    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const dispatch = useDispatch();

    const fetchProductDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((error) => {
                console.log(error);
            });
        dispatch(selectProduct(response.data));
    };

    useEffect(() => {
        if(productId && productId !== '') fetchProductDetail().then();

        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId]);

    return (
        <div className="pt-10 px-20">
            {Object.keys(product).length === 0 ? (
                <div className="text-5xl">...Loading</div>
            ) : (
                <div className="product-details mt-20 mx-5 py-12 px-20 flex flex-col lg:flex-col xl:flex-row border border-red-700 rounded rounded-xl bg-white">
                    <div className="flex-none">
                        <img src={image} alt="game cover"/>
                    </div>

                    <div className="flex flex-col mx-20">
                        <h2 className="font-semibold text-4xl leading-tight mt-1">{title}</h2>

                        <div className="text-gray-800 text-3xl">
                            {category && (
                                <>
                                    <span>{category}</span>
                                </>
                            )}
                        </div>

                        <p className="mt-12 text-3xl text-gray-600">
                            {description}
                        </p>

                        {price && (
                            <div className="mt-12 my-1 text-4xl">Price: ${price.toFixed(2)}</div>
                        )}
                        <div className="w-full mt-10">
                            <button
                                type="button"
                                style={{width: '300px'}}
                                className="bg-blue-600 hover:bg-blue-400 border border-black-900 inline-block rounded-md bg-primary px-6 py-4 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                                <span className="text-3xl">Click to Buy</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;