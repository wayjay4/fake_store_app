import {ActionTypes} from "../constants/action-types";

const initialState = [
    {
        id: 1,
        title: 'Waylon',
        category: 'programmer',
    },
];

// destructuring action to {type, payload}
export const productReducer = (state, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
};