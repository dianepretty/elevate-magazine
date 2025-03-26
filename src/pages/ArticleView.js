import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/website/Navbar";
import { useArticles } from "../context/ArticlesContext"; // Import the custom hook

const ArticleView = () => {
  const { id } = useParams();
  const { articles } = useArticles(); // Access the articles from context
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <div className="max-w-7xl mx-auto p-4">Article not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="bg-[#EEE9E1] h-full min-h-screen py-12">
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-[#2c3e50] mb-4">{article.title}</h1>
          <p className="text-gray-600 text-sm mb-6">
            <span className="font-semibold">By:</span> {article.author} | <span className="font-semibold">Published on:</span> {article.date}
          </p>
          <div className="leading-relaxed text-lg text-gray-700 mb-8">
            <p>{article.content}</p>
          </div>
          <div className="border-t-2 border-gray-200 pt-6 mt-8">
            <p className="text-center text-sm text-gray-500">End of article</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
