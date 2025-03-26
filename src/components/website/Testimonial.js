import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  { quote: "This platform has been a game-changer for me. I've learned so much from the articles and workshops.", name: "Amina, Entrepreneur" },
  { quote: "The community support and mentorship have been invaluable. I feel empowered to take the next step in my career.", name: "Ngozi, Professional" },
  { quote: "Elevate Magazine has helped me connect with inspiring women and grow my confidence in my field.", name: "Fatima, Designer" },
  { quote: "I love the engaging content and the positive energy. It's exactly what I needed for motivation!", name: "Zainab, Student" },
  { quote: "The expert advice and shared experiences are truly inspiring. Highly recommended!", name: "Chinwe, Consultant" },
  { quote: "Being part of this community has been amazing! I’ve gained so much knowledge and inspiration.", name: "Aisha, Writer" },
  { quote: "This platform is filled with uplifting stories that have helped me grow professionally.", name: "Mariam, Engineer" },
  { quote: "I appreciate the well-researched articles and expert insights shared here.", name: "Sophia, Researcher" },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const cardsPerPage = 5;

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + cardsPerPage < testimonials.length ? prevIndex + 1 : prevIndex));
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  return (
    <section id="testimonials" className="py-16  bg-[#262626]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl  text-white font-semibold mb-12 font-play italic ">What Our Community Says</h2>
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button onClick={prevTestimonial} className="absolute left-2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200">
            <FaArrowLeft className="text-gray-600" size={20} />
          </button>

          {/* Testimonials Slider */}
          <div className="overflow-hidden w-full max-w-6xl mx-auto">
            <motion.div
              className="flex gap-6"
              initial={{ x: 0 }}
              animate={{ x: `-${index * (100 / cardsPerPage)}%` }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }}
            >
              {testimonials.map((testimonial, i) => (
                <div key={i} className="w-1/5 min-w-[250px] bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button onClick={nextTestimonial} className="absolute right-2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200">
            <FaArrowRight className="text-gray-600" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
