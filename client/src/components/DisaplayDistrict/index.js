import React from "react";
import { useParams } from "react-router-dom";

const dummyCategories = [
  "Food",
  "ArtsAndCrafts",
  "HealthAndWellNess",
  "FashionAndApperal",
  "HomeDecorAndFurnishing",
];

const dummyData = Array.from({ length: 2 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  imageUrl: `https://res.cloudinary.com/dyjkp0r0x/image/upload/v1717917135/Default_foods_0_p7swyo.jpg`,
  quantity: Math.floor(Math.random() * 10) + 1, // Random quantity
  price: (Math.random() * 100).toFixed(2), // Random price
}));

function DisplayDistrict() {
  const { districtName } = useParams();
  
  const handleAddToCart = (productId) => {
    // Add logic to add product to cart
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4 text-text text-center">{districtName} Products</h1>
      {dummyCategories.map((category, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-text">{category}</h2>
          <div className="grid grid-cols-4 gap-4">
            {dummyData.map((product) => (
              <div key={product.id} className="border border-gray-300 p-4 rounded-md shadow-md flex flex-col">
                <div style={{ height: "200px" }}>
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover rounded-md" />
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-gray-400">Quantity: {product.quantity}</p>
                  <p className="text-gray-600">Price: {product.price}</p>
                </div>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="px-4 py-2 bg-accent text-white rounded-md mt-auto hover:bg-[#DF4C73CC]"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayDistrict;
