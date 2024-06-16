// src/components/Cart.js
import React, { useContext } from 'react';
import { FiMinusCircle, FiPlusCircle, FiTrash2 } from 'react-icons/fi';
import { CartContext } from '../../contexts/CartContext';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, getTotalAmount } = useContext(CartContext);

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-semibold mb-8 text-text text-center">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-4">
            <div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <div className="flex items-center">
                <button onClick={() => decreaseQuantity(item.id)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                  <FiMinusCircle />
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                  <FiPlusCircle />
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-gray-600 mr-4">{(item.cost * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item._id)} className="text-red-500 hover:text-red-700 focus:outline-none">
                <FiTrash2 />
              </button>
            </div>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <>
          <div className="mt-8 flex justify-between">
            <h2 className="text-xl font-semibold">Total Amount:</h2>
            <p className="text-xl">{getTotalAmount()}</p>
          </div>
          <button onClick={clearCart} className="bg-accent text-white px-5 py-2 rounded mt-8 hover:bg-[#DF4C73CC] mr-3">Clear Cart</button>
          <button className="bg-accent text-white px-5 py-2 rounded mt-8 hover:bg-[#DF4C73CC]">Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
