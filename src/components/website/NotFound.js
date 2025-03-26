import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#EEE9E1] text-[#303A30] text-center px-4">
      <h1 className="text-9xl font-play font-bold mb-4">404</h1>
      <p className="text-2xl font-play italic mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-[#303A30] text-white text-lg font-play italic rounded-lg hover:bg-[#262626] transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
