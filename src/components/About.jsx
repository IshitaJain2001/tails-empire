// AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16 mt-[115px]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About Us
        </h2>
        <p className="text-lg text-gray-600">
          Welcome to Tail's-Empire! We are passionate about delivering quality services that meet your needs.
          Our team of experts works tirelessly to ensure you get the best experience possible. Whether you’re looking for
          insightful articles, up-to-date information, or innovative solutions, we are here for you.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          Our goal is to create a space where your needs come first, and we’re constantly evolving to provide
          the best value for our customers. Join us on this journey as we strive to achieve excellence in everything we do.
        </p>
        
      </div>
    </section>
  );
};

export default AboutSection;
