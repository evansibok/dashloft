import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import DashboardPage from "./pages/DashboardPage";
import ErrorPage from "./pages/ErrorPage";
import EditProductPage from "./pages/Product/EditProductPage";
import ProductPage from "./pages/Product";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "product",
        element: <ProductPage />,
      },
      {
        path: "product/edit",
        element: <EditProductPage />,
      },
    ],
  },
]);

export default routes;
