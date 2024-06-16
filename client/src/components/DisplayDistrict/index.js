import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../../contexts/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const { addToCart } = useContext(CartContext);

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

  const handleAddToCart = (product) => {
    addToCart(product); 
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
                <Link to={`/productdetails/${product._id}`}>
                  <div style={{ height: "200px" }}>
                    <img src={product.url} alt={product.name} className="w-full h-full object-cover rounded-md" />
                  </div>
                  <div className="flex justify-between mt-2">
                    <p className="text-gray-400">Quantity: {product.quantity}</p>
                    <p className="text-gray-600">Price: {product.cost}</p>
                  </div>
                </Link>
                <button
                  onClick={() => handleAddToCart(product)} 
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
