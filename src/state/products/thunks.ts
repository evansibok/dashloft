import { AppDispatch } from "..";
import { Product } from "../types";
import {
  fetchAppConfigStart,
  fetchAppConfigSuccess,
  fetchProductFail,
  fetchProductStart,
  fetchProductSuccess,
  fetchTrlFail,
  fetchTrlStart,
  fetchTrlSuccess,
  updateProductFail,
  updateProductStart,
  updateProductSuccess,
} from "./reducer";

export const getProduct = async (
  dispatch: AppDispatch,
  baseURL: string,
  productId: number
) => {
  try {
    dispatch(fetchProductStart());
    const response = await fetch(`${baseURL}/product/${productId}/`);
    const data = await response.json();
    dispatch(fetchProductSuccess({ data, error: null }));
    return data;
  } catch (error: any) {
    dispatch(fetchProductFail({ error: error.message }));
    console.error(error);
    return error.message;
  }
};

export const getTrl = async (dispatch: AppDispatch, baseURL: string) => {
  try {
    dispatch(fetchTrlStart());
    const response = await fetch(`${baseURL}/trl/`);
    const data = await response.json();
    dispatch(fetchTrlSuccess({ data, error: null }));
    return data;
  } catch (error: any) {
    dispatch(fetchTrlFail({ error: error.message }));
    console.error(error);
    return error.message;
  }
};

export const getAppConfig = async (dispatch: AppDispatch, baseURL: string) => {
  try {
    dispatch(fetchAppConfigStart());
    const response = await fetch(
      `${baseURL}/configuration/${import.meta.env.VITE_APP_ID || 1}/`
    );
    const data = await response.json();
    dispatch(fetchAppConfigSuccess({ data, error: null }));
    return data;
  } catch (error: any) {
    dispatch(fetchProductFail({ error: error.message }));
    console.error(error);
    return error.message;
  }
};

export const modifyProduct = async (
  dispatch: AppDispatch,
  baseURL: string,
  productId: number,
  form: Product
) => {
  try {
    dispatch(updateProductStart());
    const response = await fetch(`${baseURL}/product/${productId}/`, {
      method: "PUT",
      body: JSON.stringify(form),
    });
    await response.json();
    // Manually saving product form to redux since endpoint doesn't change data
    dispatch(updateProductSuccess({ data: form, error: null }));
  } catch (error: any) {
    dispatch(updateProductFail({ error: error.message }));
    console.error(error);
    return error.message;
  }
};
