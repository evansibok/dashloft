import { Link, Outlet } from "react-router-dom";
import { classNames } from "../../utils/constants";
import { useAppConfig } from "../../hooks";

const Dashboard = () => {
  const { appConfig } = useAppConfig();
  console.log("appConfig->", appConfig);
  return (
    <div className="h-full bg-gray-100">
      {/* Top Nav */}
      <div
        id="dashTop"
        className="fixed bg-white w-full h-fit px-3 shadow-md flex flex-col"
      >
        <div className="flex justify-between py-4">
          <div
            className={classNames(Number(appConfig?.id) === 2 ? "w-8" : "w-24")}
          >
            <img
              src={appConfig?.logo}
              alt="danny-logo"
              className="w-full text-white"
            />
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Dashboard;
