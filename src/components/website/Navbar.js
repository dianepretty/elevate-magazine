import React from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom

const Navbar = () => {
  const location = useLocation(); // Hook to get the current location (URL)

  const handleScrollToSection = (e, section) => {
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust the offset for your navbar height
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <div className='flex font-Montserrat absolute right-0 mt-8 mr-12'> 
        <BsFillPersonFill className='mr-2 mt-[1.8px] text-lg'/>
        <Link to="/login" className=' text-base '>Login</Link> {/* Use Link for React Router */}
      </div>
      <nav className="bg-white shadow-md text-[#262626] top-0 w-full py-10 z-10">
        <div className="container mx-auto flex justify-center items-center px-8">
          <div>
            <p className='font-play text-7xl italic text-center mb-3'> ELEVATE</p>
            <p className='font-Montserrat text-base text-center mb-10'> Empowering women, elevating generations</p>
            <ul className="flex space-x-16 text-base text-gray-700">
              {["Home", "Mission", "Articles", "Testimonials", "Subscribe"].map((item) => (
                <li key={item} className="relative group">
                  {item === "Articles" ? (
                    // For "Articles", conditionally navigate based on current page
                    <Link
                      to={location.pathname === "/" ? `/#${item.toLowerCase()}` : "/articles"} // Scroll to section or navigate to /articles
                      onClick={(e) => location.pathname === "/" && handleScrollToSection(e, item.toLowerCase())} // Scroll only if on homepage
                      className="hover:text-[#303A30]"
                    >
                      {item}
                    </Link>
                  ) : (
                    <Link
                      to={location.pathname === "/" ? `/#${item.toLowerCase()}` : "/"} // Navigate to home page and scroll to section if not on home
                      onClick={(e) => {
                        if (location.pathname !== "/") {
                          // If not on homepage, navigate to homepage and then scroll to the section
                          e.preventDefault();
                          window.location.href = "/";
                          setTimeout(() => handleScrollToSection(e, item.toLowerCase()), 300);
                        } else {
                          handleScrollToSection(e, item.toLowerCase());
                        }
                      }}
                      className="hover:text-[#303A30]"
                    >
                      {item}
                    </Link>
                  )}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#303A30] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
