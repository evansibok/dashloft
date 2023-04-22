import { Link, Outlet, useLocation } from "react-router-dom";
import { classNames, navigation } from "../../utils/constants";
import { useAppConfig, useProduct } from "../../hooks";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Dashboard = () => {
  const { pathname } = useLocation();
  const { product } = useProduct();
  const { appConfig } = useAppConfig();
  const [showMenu, setShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState(pathname);

  return (
    <div className="h-full bg-gray-100">
      {/* Top Nav */}
      <div
        id="dashTop"
        className="fixed bg-white w-full h-fit px-3 shadow-md flex flex-col"
      >
        <div className="flex justify-between py-4">
          {/* Logo */}
          <div
            className={classNames(Number(appConfig?.id) === 2 ? "w-8" : "w-24")}
          >
            <img
              src={appConfig?.logo}
              alt="danny-logo"
              className="w-full text-white"
            />
          </div>

          {/* Shows in mobile only */}
          <button onClick={() => setShowMenu(!showMenu)} className="lg:hidden">
            <Bars3Icon className="w-5 h-5" />
          </button>

          {/* Shows in desktop only */}
          <div className="hidden lg:flex text-xs">
            <p>{product?.user?.firstName}</p>
          </div>
        </div>

        {/* mobile menu */}
        {showMenu && (
          <div id="mobile-menu" className="bg-transparent lg:hidden">
            <nav>
              <ul className="pb-5 pt-2">
                {navigation.map((navItem) => {
                  const isActive =
                    pathname.includes(navItem.href) &&
                    activeNav === navItem.href;

                  return (
                    <li
                      key={navItem.title}
                      onClick={() => setActiveNav(navItem.href)}
                      className={classNames(
                        isActive ? "text-blue-800 font-bold" : "",
                        "py-2 text-sm"
                      )}
                    >
                      <Link
                        to={navItem.href}
                        className="flex gap-2 items-center"
                      >
                        <navItem.icon className="w-5 h-5" />
                        {navItem.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </div>

      <Outlet />
    </div>
  );
};

export default Dashboard;
