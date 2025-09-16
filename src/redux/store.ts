import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from '../../node_modules/redux-logger/src/index';

import userSlice from "./reducers/userReducer";



const allReducers = combineReducers({
    user: userSlice
});

const storeInstance = configureStore({
    reducer: allReducers
});

export { storeInstance };
export type AppDispatch = typeof storeInstance.dispatch;