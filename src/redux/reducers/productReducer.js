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