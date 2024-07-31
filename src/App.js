import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductList />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default App;
