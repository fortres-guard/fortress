import React from 'react';
import WhoWeAre from './WhoWeAre';
import WhatWeDeliver from './WhatWeDeliver';
import OurVision from './OurVision';

const AboutUs = () => {
  return (
    <section className="bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 py-16 text-white">
        <WhoWeAre />
        <hr className="border-gray-700 mb-12" />
        <WhatWeDeliver /> 
        <hr className="border-gray-700 mb-12" />
        <OurVision />
        
      </div>
    </section>
  );
};

export default AboutUs;
