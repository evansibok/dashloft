import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import DashboardPage from "./pages/DashboardPage";
import ErrorPage from "./pages/ErrorPage";
import EditProductPage from "./pages/Product/EditProductPage";
import ProductPage from "./pages/Product";
import { getAppConfig, getProduct, getTrl } from "./state/products/thunks";
import store from "./state";
import { baseURL } from "./utils/constants";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    loader: () => getAppConfig(store.dispatch, baseURL),
    children: [
      {
        path: "/",
        element: <DashboardPage />,
        loader: () => getProduct(store.dispatch, baseURL, 6781),
      },
      {
        path: "product",
        element: <ProductPage />,
        loader: () => getTrl(store.dispatch, baseURL),
      },
      {
        path: "product/edit",
        element: <EditProductPage />,
      },
    ],
  },
]);

export default routes;
