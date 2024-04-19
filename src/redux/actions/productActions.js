import {ActionTypes} from "../constants/action-types";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
}

export const selectProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVED_SELECTED_PRODUCT,
    };
};

export const addProductToCart = (product) => {
    return {
        type: ActionTypes.ADD_PRODUCT_TO_CART,
        payload: product,
    };
};

export const removeProductFromCart = (product) => {
    return {
        type: ActionTypes.DELETE_PRODUCT_FROM_CART,
        payload: product,
    };
};