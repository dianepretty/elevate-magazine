// src/pages/Home.js
import React from 'react';
import Navbar from '../components/website/Navbar';
import Hero from '../components/website/Hero';
import About from '../components/website/About';
import Articles from '../components/website/Articles';
import Testimonial from '../components/website/Testimonial';
import Footer from '../components/website/Footer';


const Home = () => {
  return (
    <div className="bg-gray-100 font-Montserrat text-sm ">
      <Navbar />
      <About />
      <Hero />
      <Articles />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
