import React from 'react';
import { useParams } from 'react-router-dom';
const ItemCardSmall = ({ item }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg p-2 w-[250px] h-[270px]">
      <img src={item.image} alt={item.name} className="rounded-md mb-2 h-[150px] w-full object-cover" />
      <div className="p-2">
        <h2 className="text-base font-semibold mb-1">{item.name}</h2>
        <p className="text-gray-600 mb-1">{item.price}</p>
        <button className="bg-accent text-white px-3 py-1 rounded hover:bg-[#DF4C73CC] text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
};



const ViewMore = () => {
  const {name}=useParams();
  const items = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://res.cloudinary.com/dyjkp0r0x/image/upload/v1717917135/Default_foods_0_p7swyo.jpg',
      price: '50.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://res.cloudinary.com/dyjkp0r0x/image/upload/v1717917135/Default_foods_0_p7swyo.jpg',
      price: '30.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla.',
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://res.cloudinary.com/dyjkp0r0x/image/upload/v1717917135/Default_foods_0_p7swyo.jpg',
      price: '25.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla.',
    },
  ];

  return (
    <div className="container mx-auto p-4 mb-[200px] ">
      <h1 className="text-2xl font-semibold mb-8 text-text text-center">{name.replaceAll("_"," ")}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {items.map(item => (
          <ItemCardSmall key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ViewMore;
