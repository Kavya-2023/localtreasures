import React from 'react';
import Select from 'react-select';

// Dummy data for categories and districts
const categories = [
  { value: 'foods', label: 'Foods' },
  { value: 'artsAndCrafts', label: 'Arts and Crafts' },
  { value: 'fashionAndApparel', label: 'Fashion and Apparel' },
  { value: 'healthAndWellness', label: 'Health and Wellness' },
  { value: 'homeDecorAndFurnishing', label: 'Home Decor and Furnishing' },
];

const districts = [
  { value: 'anantapur', label: 'Anantapur' },
  { value: 'chittoor', label: 'Chittoor' },
  { value: 'eastGodavari', label: 'East Godavari' },
  { value: 'guntur', label: 'Guntur' },
  { value: 'krishna', label: 'Krishna' },
  { value: 'kurnool', label: 'Kurnool' },
  { value: 'nellore', label: 'SPSR Nellore' },
  { value: 'prakasam', label: 'Prakasam' },
  { value: 'srikakulam', label: 'Srikakulam' },
  { value: 'visakhapatnam', label: 'Visakhapatnam' },
  { value: 'vizianagaram', label: 'Vizianagaram' },
  { value: 'westGodavari', label: 'West Godavari' },
  { value: 'Kadapa', label: 'YSR Kadapa' }
];


// Dummy data for products
const products = [
  {
    name: 'Product 1',
    img: 'https://res.cloudinary.com/dyjkp0r0x/image/upload/v1717917170/Default_arts_and_crafts_1_rqyiku.jpg',
    price: '10.00',
  },
  {
    name: 'Product 2',
    img: 'https://res.cloudinary.com/dyjkp0r0x/image/upload/v1717917170/Default_arts_and_crafts_1_rqyiku.jpg',
    price: '20.00',
  },
  {
    name: 'Product 3',
    img: 'https://res.cloudinary.com/dyjkp0r0x/image/upload/v1717917170/Default_arts_and_crafts_1_rqyiku.jpg',
    price: '30.00',
  },
  {
    name: 'Product 4',
    img: 'https://res.cloudinary.com/dyjkp0r0x/image/upload/v1717917170/Default_arts_and_crafts_1_rqyiku.jpg',
    price: '40.00',
  },
  {
    name: 'Product 5',
    img: 'https://res.cloudinary.com/dyjkp0r0x/image/upload/v1717917170/Default_arts_and_crafts_1_rqyiku.jpg',
    price: '50.00',
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="rounded overflow-hidden shadow-lg bg-background transform transition-transform duration-300 hover:scale-105">
        <img className="w-full h-32 object-cover" src={product.img} alt={product.name} />
        <div className="px-4 py-2">
          <div className="font-bold text-md mb-2 text-text">{product.name}</div>
          <div className="text-md mb-2 text-gray-700">{product.price}</div>
          <button className="bg-accent text-white text-sm px-3 py-1 rounded-full hover:bg-[#DF4C73CC]">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 p-4 bg-gray-100 ">
        <button className="w-full bg-accent text-white px-4 py-2 rounded-full hover:bg-[#DF4C73CC] mb-4">
          All Products
        </button>
        <div className="mb-4">
          <h3 className="font-bold text-md mb-2">Category</h3>
          <Select options={categories} />
        </div>
        <div>
          <h3 className="font-bold text-md mb-2">District</h3>
          <Select options={districts} />
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-3/4 p-4 flex flex-wrap">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
