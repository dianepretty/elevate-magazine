import React from 'react'; 
import { TbArrowNarrowRight } from 'react-icons/tb';
import { useArticles } from '../../context/ArticlesContext';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Articles = () => {
  const { articles } = useArticles(); // Access articles from context
  const latestArticles = articles.slice(0, 4); // Get only the latest 4 articles

  return (
    <section id="articles" className="bg-[#e5ebda] py-16">
      <div className="container mx-auto text-left">
        <h2 className="text-4xl font-semibold text-[#262626] text-center mb-16 font-play italic">
          Featured Articles
        </h2>
        <div className="flex justify-center gap-8 mb-6">
          {latestArticles.map((article, index) => (
            <div key={index} className="w-80 bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-lg italic font-play mb-4 text-[#303A30]">
                {article.title}
              </h3>
              <p className="mb-4">{article.description}</p>
              <Link to={`/article/${article.id}`} className="flex hover:cursor-pointer font-play font-base text-sm text-[#303A30] hover:underline">
                Read more <TbArrowNarrowRight className="mt-1 ml-1" size={14} />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <a href="/articles" className="text-lg italic mt-10 text-center flex text-[#262626] hover:underline">
            View all articles
            <TbArrowNarrowRight className="mt-2 ml-2" size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articles;
