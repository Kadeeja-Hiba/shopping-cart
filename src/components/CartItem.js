import React from "react";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  return (
    <li className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center space-x-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h3 className="text-lg font-medium text-dark">{item.name}</h3>
          <p className="text-primary font-semibold">${item.price}</p>
          <div className="flex items-center mt-2 space-x-2">
            <button
              className="text-red-600 hover:text-red-800 transition-colors duration-200"
              onClick={() => handleQuantityChange(item.quantity - 1)}
            >
              <MinusCircleIcon className="h-6 w-6" />
            </button>
            <span className="border rounded w-12 text-center py-1 px-2">
              {item.quantity}
            </span>
            <button
              className="text-green-600 hover:text-green-800 transition-colors duration-200"
              onClick={() => handleQuantityChange(item.quantity + 1)}
            >
              <PlusCircleIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <button
        className="text-red-600 hover:text-red-800 transition-colors duration-200"
        onClick={() => onRemove(item.id)}
      >
        <TrashIcon className="h-8 w-8" />
      </button>
    </li>
  );
};

export default CartItem;
