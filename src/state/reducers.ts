import { combineReducers } from "@reduxjs/toolkit";

import productReducer from "./products/reducer";

const reducers = combineReducers({
  product: productReducer,
});

export default reducers;
