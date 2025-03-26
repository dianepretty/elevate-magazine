import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useArticles } from '../../context/ArticlesContext';
import TopBar from '../dashboard/Topbar';
import Sidebar from '../dashboard/Sidebar';

import { Import } from 'lucide-react';

const EditArticleForm = () => {
  const { articles, updateArticle } = useArticles();
  const { id } = useParams();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
  });

  useEffect(() => {
    const article = articles.find(a => a.id === parseInt(id));
    if (article) {
      setFormData({
        title: article.title,
        author: article.author,
        description: article.description,
      });
    }
  }, [id, articles]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateArticle(parseInt(id), formData);

    // Show success message
    setSuccessMessage('Article updated successfully!');

    // Redirect after 2 seconds
    setTimeout(() => {
      setSuccessMessage(null);
      navigate('/'); // Redirect to articles list
    }, 2000);
  };

  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full'>
        <TopBar />
        <div className="max-w-3xl mx-auto mt-20 p-10 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Edit Article</h2>

          {successMessage && (
            <div className="mb-4 p-3 text-green-800 bg-green-100 border border-green-300 rounded-md text-center">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-[#303A30] text-white rounded-md hover:bg-[#262626]"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditArticleForm;
