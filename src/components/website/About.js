// src/components/About.js
import React from 'react';
import one from "../../images/one.jpg"
import two from "../../images/two.jpg"
import three from "../../images/three.jpg"
import four from "../../images/four.jpg"
import five from "../../images/five.jpg"
import  six from "../../images/six.jpg"

const About = () => {
  const womenData = [
    {
      name: 'Sarah Johnson',
      imageUrl: one,
    },
    {
      name: 'Michelle Obama',
      imageUrl: two,
    },
    {
      name: 'Sarah Jakes',
      imageUrl: three,
    },
    {
      name: 'Linda Roberts',
      imageUrl: four,
    },
    {
      name: 'Helen Brown',
      imageUrl: five,
    },
    {
      name: 'Angela White',
      imageUrl: six,
    },
  ];

  return (
    <section id="home" className="bg-[#f5f1e6] py-16 ">
      <div className="container mx-auto text-center">
       
        <div className="flex justify-center gap-10">
          {womenData.map((woman, index) => (
            <div key={index} className="bg-white p-0 h-60 rounded-lg shadow-lg w-40">
              <img
                src={woman.imageUrl}
                alt={woman.name}
                className="w-full h-44 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-sm">{woman.name}</h3>
            </div>
          ))}
        </div>
        <h2 className="text-2xl mt-8 mx-12   text-gray-700">
        We are a platform and community empowering ambitious women of faith to thrive and impact mainstream industries and culture.
        </h2>
      </div>
      
    </section>
  );
};

export default About;
