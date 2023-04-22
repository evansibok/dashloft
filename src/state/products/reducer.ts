import { createSlice } from "@reduxjs/toolkit";

import { ProductState } from "../types";

const initialState: ProductState = {
  loading: false,
  error: null,
  product: null,
  trl: null,
};

export const productState = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductStart: (state) => {
      state.loading = true;
    },
    fetchProductSuccess: (state, { payload: { data, error } }) => {
      console.log("product->success", data);
      state.loading = false;
      state.product = data;
      state.error = error;
    },
    fetchProductFail: (state, { payload: { error } }) => {
      state.loading = false;
      state.error = error;
    },
    fetchTrlStart: (state) => {
      state.loading = true;
    },
    fetchTrlSuccess: (state, { payload: { data, error } }) => {
      console.log("trl->success", data);
      state.loading = false;
      state.trl = data;
      state.error = error;
    },
    fetchTrlFail: (state, { payload: { error } }) => {
      state.loading = false;
      state.error = error;
    },
  },
});

export const {
  fetchProductFail,
  fetchProductStart,
  fetchProductSuccess,
  fetchTrlFail,
  fetchTrlStart,
  fetchTrlSuccess,
} = productState.actions;

export default productState.reducer;
