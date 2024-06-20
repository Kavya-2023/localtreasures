import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../../contexts/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CountryStateContext } from '../../contexts/CountryStateContext';

const ItemCardSmall = ({ item, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg p-2 w-[280px] h-[330px]">
      <img src={item.url} alt={item.name} className="rounded-md mb-2 h-[150px] w-full object-cover" />
      <div className="p-2">
        <h2 className="text-base font-semibold mb-1">{item.name}</h2>
        <p className="text-gray-600 mb-1">{item.cost}</p>
        <p className="text-gray-600 mb-1">{item.quantity}</p>
        <button className="bg-accent text-white px-3 py-1 rounded hover:bg-[#DF4C73CC] text-sm"
          onClick={() => onAddToCart(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ViewMore = () => {
  const { name } = useParams();
  const category = name;
  const [items, setItems] = useState([]);
  const { addToCart } = useContext(CartContext);
  const {selectedState} = useContext(CountryStateContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/productsbycategory?stateName=${selectedState}?categoryName=${category}`);
        setItems(response.data.products);
      } catch (err) {
        console.error("Failed to fetch data", err);
      }
    };

    fetchData();
  }, [category]);

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="container mx-auto p-4 mb-[200px]">
      <h1 className="text-2xl font-semibold mb-8 text-text text-center">{name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {items.map(item => (
          <ItemCardSmall key={item.id} item={item} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ViewMore;
