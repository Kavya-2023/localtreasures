import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone } from 'react-icons/fi'; // Importing address and phone icons

const ProductDetails = () => {
  // Dummy product data
  const product = {
    name: 'Product Name',
    image: 'https://res.cloudinary.com/dyjkp0r0x/image/upload/v1717917170/Default_arts_and_crafts_1_rqyiku.jpg',
    description: 'create prodcutc details apge in first row card contands product image one side with 400px width 300px height and that prodyct detals right and in next row the sellers cards with heading middle trusted selleres should dsipay',
    price: '50.00',
    quantity: 10,
  };

  // Dummy seller data
  const sellers = [
    {
      name: 'Seller 1',
      address: '123 Main St, City, Country',
      contact: '+1234567890',
    },
    {
      name: 'Seller 2',
      address: '456 Elm St, City, Country',
      contact: '+9876543210',
    },
    {
      name: 'Seller 3',
      address: '789 Oak St, City, Country',
      contact: '+2468135790',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="col-span-1 md:col-span-1">
          <img src={product.image} alt={product.name} className="w-400 h-300 rounded-lg" />
        </div>
        {/* Product Details */}
        <div className="col-span-1 md:col-span-1">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
              <Link to="/products" className="text-blue-500 hover:underline">Go Back</Link>
            </div>
            <p className="text-lg text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold text-accent">{product.price}</span>
              <span className="ml-4 text-gray-500">Quantity: {product.quantity}</span>
            </div>
            {/* Add to Cart Button */}
            <button className="bg-accent text-white px-5 py-2 rounded hover:bg-[#DF4C73CC] mb-4">Add to Cart</button>
          </div>
        </div>
        {/* Trusted Sellers */}
        <div className="col-span-2 md:col-span-2">
          <h2 className="text-3xl font-semibold mb-4 text-center text-text">Trusted Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sellers.map((seller, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <p className="text-lg font-semibold mb-1">{seller.name}</p>
                <div className="flex items-center mb-1">
                  <FiMapPin className="mr-2" /> {/* Address Icon */}
                  <p className="text-gray-600">{seller.address}</p>
                </div>
                <div className="flex items-center">
                  <FiPhone className="mr-2" /> {/* Phone Icon */}
                  <p className="text-gray-600">{seller.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
