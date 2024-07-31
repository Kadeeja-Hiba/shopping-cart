import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/actions";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity(productId, quantity));
    }
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-primary">
        Shopping Cart
      </h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemoveFromCart}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))}
        </ul>
      )}
      <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-xl font-bold text-dark">
          Total Price: ${totalPrice}
        </h3>
      </div>
    </div>
  );
};

export default Cart;
