import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  return (
    <nav className="bg-primary p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">ShopEasy</h1>
      </div>
    </nav>
  );
};

export default Navbar;
