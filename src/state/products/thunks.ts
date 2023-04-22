import { AppDispatch } from "..";
import {
  fetchAppConfigStart,
  fetchAppConfigSuccess,
  fetchProductFail,
  fetchProductStart,
  fetchProductSuccess,
  fetchTrlFail,
  fetchTrlStart,
  fetchTrlSuccess,
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
