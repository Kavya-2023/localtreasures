import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ItemCardSmall = ({ item }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg p-2 w-[280px] h-[330px]">
      <img src={item.url} alt={item.name} className="rounded-md mb-2 h-[150px] w-full object-cover" />
      <div className="p-2">
        <h2 className="text-base font-semibold mb-1">{item.name}</h2>
        <p className="text-gray-600 mb-1">{item.cost}</p>
        <p className="text-gray-600 mb-1">{item.quantity}</p>
        <button className="bg-accent text-white px-3 py-1 rounded hover:bg-[#DF4C73CC] text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ViewMore = () => {
  const { name } = useParams();
  console.log(name);
  const category = name;
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/district/getproductsby?category=${category}`);
      console.log(response.data);
      setItems(response.data);
    } catch (err) {
      console.error("Failed to fetch data", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="container mx-auto p-4 mb-[200px]">
      <h1 className="text-2xl font-semibold mb-8 text-text text-center">{name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {items.map(item => (
          <ItemCardSmall key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ViewMore;
