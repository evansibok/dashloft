import { createSlice } from "@reduxjs/toolkit";

import { ProductState } from "../types";

const initialState: ProductState = {
  loading: false,
  error: null,
  product: null,
  trl: null,
  appConfig: null,
};

export const productState = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductStart: (state) => {
      state.loading = true;
    },
    fetchProductSuccess: (state, { payload: { data, error } }) => {
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
      state.loading = false;
      state.trl = data;
      state.error = error;
    },
    fetchTrlFail: (state, { payload: { error } }) => {
      state.loading = false;
      state.error = error;
    },
    fetchAppConfigStart: (state) => {
      state.loading = true;
    },
    fetchAppConfigFail: (state, { payload: { error } }) => {
      state.loading = false;
      state.error = error;
    },
    fetchAppConfigSuccess: (state, { payload: { error, data } }) => {
      state.loading = false;
      state.error = error;
      state.appConfig = data;
    },
    updateProductStart: (state) => {
      state.loading = true;
    },
    updateProductFail: (state, { payload: { error } }) => {
      state.loading = false;
      state.error = error;
    },
    updateProductSuccess: (state, { payload: { error, data } }) => {
      state.loading = false;
      state.error = error;
      state.product = { ...state.product, ...data };
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
  fetchAppConfigFail,
  fetchAppConfigStart,
  fetchAppConfigSuccess,
  updateProductFail,
  updateProductStart,
  updateProductSuccess,
} = productState.actions;

export default productState.reducer;
