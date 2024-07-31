import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const products = [
  {
    id: 1,
    name: "Stylish Sneakers",
    price: 100,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Elegant Watch",
    price: 250,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Casual T-Shirt",
    price: 30,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Office Chair",
    price: 180,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Gaming Headset",
    price: 75,
    image: "https://via.placeholder.com/150",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-dark">{product.name}</h3>
              <p className="text-xl font-semibold text-primary">
                ${product.price}
              </p>
              <button
                className="mt-4 bg-accent hover:bg-primary text-white py-2 px-4 rounded-lg w-full transition-colors duration-300"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
