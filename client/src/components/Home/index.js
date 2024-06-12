import React from 'react';
import Hero from '../Hero';
import Categories from '../Categories';
import Banner from '../Banner';
import DistrictCarousel from '../DistrictCarousel';

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Banner/>
      <DistrictCarousel/>
    </div>
  );
};

export default Home;
