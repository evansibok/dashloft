import { AppDispatch } from "..";
import {
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
