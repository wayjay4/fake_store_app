import {combineReducers} from "redux";
import {productReducer, selectedProductReducer, addProductToCartReducer} from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: addProductToCartReducer,
});

export default reducers;