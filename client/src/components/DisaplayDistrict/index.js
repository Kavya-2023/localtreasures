import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const dummyCategories = [
  "foods",
  "artsAndCrafts",
  "healthAndWellness",
  "fashionAndApparel",
  "homeDecorAndFurnishing",
];

function DisplayDistrict() {
  const { id } = useParams();
  console.log(id);
  const [district, setDistrict] = useState(null);

  useEffect(() => {
    const fetchDistrictData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/district/getdistrictbyid/${id}`);
        setDistrict(response.data);
      } catch (error) {
        console.error("Failed to fetch district data:", error);
      }
    };

    fetchDistrictData();
  }, [id]);

  const handleAddToCart = (productId) => {
    console.log(`Product ${productId} added to cart`);

  };

  if (!district) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4 text-text text-center">{district.name} Products</h1>
      {dummyCategories.map((category) => (
        <div key={category} className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-text">{category}</h2>
          <div className="grid grid-cols-4 gap-4">
            {district.products[category].map((product) => (
              <div key={product._id} className="border border-gray-300 p-4 rounded-md shadow-md flex flex-col">
                <div style={{ height: "200px" }}>
                  <img src={product.url} alt={product.name} className="w-full h-full object-cover rounded-md" />
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-gray-400">Quantity: {product.quantity}</p>
                  <p className="text-gray-600">Price: {product.cost}</p>
                </div>
                <button
                  onClick={() => handleAddToCart(product._id)} // Use product._id as productId
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
