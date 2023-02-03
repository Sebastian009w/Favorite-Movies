import { NavLink } from "react-router-dom";

export function Categories() {
  return (
    <>
      <div
        className="flex items-center justify-between"
      >
        <ul className="flex items-center justify-center gap-10 p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                : "text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/superman"
            className={({ isActive }) =>
              isActive
                ? "block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 hover:bg-gray-700 text-blue-700 md:dark:hover:bg-transparent dark:border-gray-700"
                : "text-white"
            }
          >
            Superman
          </NavLink>

          <NavLink
            to="/wonderWoman"
            className={({ isActive }) =>
              isActive
                ? "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-blue-700"
                : "text-white"
            }
          >
            Wonder Woman
          </NavLink>
        </ul>
      </div>
    </>
  );
}
