import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Link to="/product/edit">Edit Product</Link>

      <Outlet />
    </div>
  );
};

export default Dashboard;
