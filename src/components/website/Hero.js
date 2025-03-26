import React from 'react';
import mine from "../../images/pic.jpg"

const Hero = () => {
  return (
    <section id='mission' className=" bg-[#303A30]  text-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        {/* Left: Image */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <img
            src={mine} // Replace with the actual image path
            alt="Magazines and open book"
            className="rounded-lg w-8/12  shadow-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl  md:text-4xl  text-white font-play italic font-semibold mb-6">
           Mission to Elevate 
          </h2>
          <p className="text-lg italic text-white leading-relaxed">
            ‘ Our mission is to empower African women by sharing testimonials from successful Black women, inspiring them to pursue greatness. By learning from these stories, I aim to equip women with the confidence and knowledge to create solutions for Africa’s most pressing challenges—while remaining the soul that nurtures and strengthens their families.’
          </p>
          <p className="mt-4 font-semibold ">- Grace Cyubahirocy'Imana</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
