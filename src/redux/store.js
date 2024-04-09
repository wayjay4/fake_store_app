import {createStore} from "redux";
import reducers from './reducers/productReducer';

// TODO: need to update deprecated method createStore
const store = createStore(reducers, {});

export default store;