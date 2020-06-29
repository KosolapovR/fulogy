import {combineReducers, createStore} from "redux";
import Constructor from './constructor';

export const configureStore = () => {
    const rootReducer = combineReducers({Constructor});
    return createStore(rootReducer);
};