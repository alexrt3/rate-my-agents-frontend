import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 mb-10 shadow-md">
      <div className="text-2xl font-bold">FindMyAgent</div>
      <div className="flex space-x-6">
        <Link to="/signup" className="text-gray-600 hover:text-blue-500">
          Sign Up
        </Link>
        <Link to="/login" className="text-gray-600 hover:text-blue-500">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;