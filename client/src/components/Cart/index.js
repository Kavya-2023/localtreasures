import React, { useState } from 'react';
import { FiMinusCircle, FiPlusCircle, FiTrash2 } from 'react-icons/fi';

const Cart = () => {
  // Dummy cart data
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 20.00,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 30.00,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 25.00,
      quantity: 3,
    },
  ]);

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Function to increase quantity
  const increaseQuantity = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Function to decrease quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // Function to calculate total amount
  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-semibold mb-8 text-text text-center">Shopping Cart</h1>
      {cart.map((item) => (
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
            <p className="text-gray-600 mr-4">${(item.price * item.quantity).toFixed(2)}</p>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 focus:outline-none">
              <FiTrash2 />
            </button>
          </div>
        </div>
      ))}
      <div className="mt-8 flex justify-between">
        <h2 className="text-xl font-semibold">Total Amount:</h2>
        <p className="text-xl">${getTotalAmount()}</p>
      </div>
      <button onClick={clearCart} className="bg-accent text-white px-5 py-2 rounded mt-8 hover:bg-[#DF4C73CC] mr-3">Clear Cart</button>
      <button className="bg-accent text-white px-5 py-2 rounded mt-8 hover:bg-[#DF4C73CC]">Checkout</button>
    </div>
  );
};

export default Cart;
