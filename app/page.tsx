import React from 'react';
import VantaComponent from './_components/VantaComponent';
import Hero from './_components/hero';
import About from './_components/about';
import Work from './_components/work';
import FormComponent from './_components/form';
import Services from './_components/service';

const HomePage = () => {
  return (
    <div className='relative' id="home">
      <Hero />
      <VantaComponent />
      <About />
      <Work />
      <Services />
      <FormComponent />
    </div>
  );
};

export default HomePage;