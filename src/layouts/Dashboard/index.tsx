import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Link to="/product">Product</Link>
      <Link to="/product/edit">Edit Product</Link>
    </div>
  );
};

export default Dashboard;
