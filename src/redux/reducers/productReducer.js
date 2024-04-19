import {ActionTypes} from "../constants/action-types";

const initialState = [];

// destructuring action to {type, payload}
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state;
    }
};

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        case ActionTypes.REMOVED_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};

export const addProductToCartReducer = (state = [], {type, payload}) => {
    switch (type) {
        case ActionTypes.ADD_PRODUCT_TO_CART:
            return [...state, payload];
        case ActionTypes.DELETE_PRODUCT_FROM_CART:
            return [...state].filter((item) => {
                return (item.id !== payload.id);
            });
        default:
            return state;
    }
};