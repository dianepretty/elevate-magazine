import { Link } from "react-router-dom";
import { useState } from "react";
import { TbArrowNarrowRight } from "react-icons/tb";
import Navbar from "../components/website/Navbar";
import { useArticles } from '../context/ArticlesContext'; // Import the useArticles hook

const Articles = () => {
  const { articles } = useArticles(); // Get articles from context
  const [search, setSearch] = useState("");

  // Filter the articles based on search query
  const filteredArticles = articles
    .filter((article) => article.title.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 8); // Display only the latest 8 articles

  return (
    <div >
      <Navbar />
      <div className="bg-[#EEE9E1] h-full min-h-screen ">
        <div className="max-w-7xl  mx-auto py-14 p-4 font-Montserrat">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full p-2 mb-6 border border-white focus:outline-none rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="grid grid-cols-4 gap-y-16 gap-x-8 justify-center">
            {filteredArticles.map((article) => (
              <div key={article.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-base italic font-play mb-4 text-[#303A30]">
                  {article.title}
                </h3>
                <p className="mb-4 text-sm">{article.description}</p>
                <Link to={`/article/${article.id}`} className="flex font-play text-sm text-[#303A30] hover:underline">
                  Read more <TbArrowNarrowRight className="mt-1 ml-1" size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
