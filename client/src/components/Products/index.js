import React, { useState, useEffect, useContext  } from 'react';
import Select from 'react-select';
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import axios from 'axios';

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
  { value: 'Kadapa', label: 'YSR Kadapa' },
];

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="rounded overflow-hidden shadow-lg bg-background transform transition-transform duration-300 hover:scale-105">
        <img className="w-full h-32 object-cover" src={product.url} alt={product.name} />
        <div className="px-4 py-2">
          <div className="font-bold text-md mb-2 text-text">{product.name}</div>
          <div className="text-md mb-2 text-gray-700">{product.cost}</div>
          <Link to={`/productdetails/${product._id}`}>
            <button className="bg-accent text-white text-sm px-3 py-1 mr-2 rounded-md hover:bg-[#DF4C73CC]">
              View Details
            </button>
          </Link>
          <Link to="/cart">
            <button className="bg-accent text-white text-sm px-3 py-1 rounded-md hover:bg-[#DF4C73CC]" onClick={() => addToCart(product)}>
              Add
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = 'http://localhost:5000/district/getallproducts';
        const params = new URLSearchParams();
        if (selectedCategory) {
          params.append('category', selectedCategory.value);
        }
        if (selectedDistrict) {
          params.append('district', selectedDistrict.value);
        }
      
        if (params.toString()) {
          url += `?${params.toString()}`;
        }

        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [selectedCategory, selectedDistrict, searchTerm]);

  useEffect(() => {
    const filterProducts = () => {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [searchTerm, products]);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  const handleDistrictChange = (selectedOption) => {
    setSelectedDistrict(selectedOption);
  };

  const handleSearch = () => {
    
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  const handleAllProducts = () => {
    setSelectedCategory(null);
    setSelectedDistrict(null);
    setSearchTerm('');
    setFilteredProducts(products);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 p-4 bg-gray-100">
        <button
          className="w-full bg-accent text-white px-4 py-2 rounded-full hover:bg-[#DF4C73CC] mb-4"
          onClick={handleAllProducts}
        >
          All Products
        </button>
        <div className="relative hidden md:flex">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-300 px-4 py-2 rounded-full focus:outline-none w-full"
            value={searchTerm}
            onChange={handleSearchInputChange}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          <button
            className="absolute right-3 top-3  text-gray-500 "
            onClick={handleSearch}
          >
            <IoIosSearch />
          </button>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-md mb-2">Category</h3>
          <Select
            options={categories}
            onChange={handleCategoryChange}
            value={selectedCategory}
          />
        </div>
        <div>
          <h3 className="font-bold text-md mb-2">District</h3>
          <Select
            options={districts}
            onChange={handleDistrictChange}
            value={selectedDistrict}
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-3/4 p-4 flex flex-wrap">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
