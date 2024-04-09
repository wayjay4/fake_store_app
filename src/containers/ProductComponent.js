import React from "react";
import {useSelector} from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts);
    const product = products[0];

    return (
        <div className="four column wide" style={{marginTop:"25px"}}>
            <div className="ui link cards">
                <div className="card">
                    <div className="image"></div>
                    <div className="content">
                        <div className="header">{product.title}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductComponent;