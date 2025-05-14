import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-gray-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold flex items-center">
          <img src="/favicon.png" alt="logo" className="h-8 w-auto" />
          <p className="ml-2">MealFinder</p>
        </Link>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-gray-700 px-4 py-2 rounded"
                : "text-white px-4 py-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/ingredients"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-gray-700 px-4 py-2 rounded"
                : "text-white px-4 py-2"
            }
          >
            Ingredients
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
