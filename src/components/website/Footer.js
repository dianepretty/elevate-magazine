import React, { useState } from 'react';
import { FaTwitter, FaInstagram, FaYoutube, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscription = (e) => {
    e.preventDefault();
    if (firstName && lastName && email) {
      setIsSubscribed(true);
      console.log('Subscribed with:', { firstName, lastName, email });
      setFirstName('');
      setLastName('');
      setEmail('');
      setShowPopup(true); // Show the popup upon successful form submission
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup when the close button is clicked
  };

  return (
    <footer id="subscribe" className="bg-[#EEE9E1] text-[#262626] py-12 relative">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-6">Subscribe to get the latest updates, articles, and stories directly to your inbox.</p>
        <form onSubmit={handleSubscription} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="px-4 py-4 rounded-lg w-60 sm:w-60 text-gray-900 focus:outline-none"
            required
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="px-4 py-4 rounded-lg w-60 sm:w-60 text-gray-900 focus:outline-none"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-4 rounded-lg w-60 sm:w-60 text-gray-900 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-[#262626] text-white px-6 py-4 w-60 sm:w-40 rounded-lg hover:bg-[#3a3a3a] transition duration-300"
          >
            Subscribe
          </button>
        </form>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-[#262626] text-2xl hover:text-gray-600 transition duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-[#262626] text-2xl hover:text-gray-600 transition duration-300" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-[#262626] text-2xl hover:text-gray-600 transition duration-300" />
          </a>
        </div>

        <div className="mt-8">
          <p>&copy; 2025 Elevate Magazine. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to Top Icon */}
      <div
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-[#262626] text-white p-4 rounded-full cursor-pointer hover:bg-[#303A30] transition duration-300"
      >
        <FaArrowUp className="text-xl" />
      </div>

      {/* Thank You Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm mx-4">
            <h3 className="text-xl font-semibold text-center text-[#98C369]">Thank you for subscribing!</h3>
            <p className="text-center text-gray-600 mt-4">We appreciate your interest in Elevate Magazine. You'll start receiving our updates soon.</p>
            <button
              onClick={closePopup}
              className="mt-6 bg-[#a03246] text-white py-2 px-4 rounded-full w-full hover:bg-[#df3857] transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
