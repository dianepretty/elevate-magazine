import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useArticles } from '../../context/ArticlesContext';
import TopBar from '../dashboard/Topbar';
import Sidebar from '../dashboard/Sidebar';
import { Import } from 'lucide-react';

const EditArticleForm = () => {
  const { articles, updateArticle } = useArticles(); // Fetching articles and the update function from context
  const { id } = useParams(); // Retrieving article ID from URL params
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [successMessage, setSuccessMessage] = useState(null); // Success message state
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    content: '', // Added content field to form data
  }); // State for form data

  useEffect(() => {
    // Find the article by ID from the articles list
    const article = articles.find(a => a.id === parseInt(id));
    if (article) {
      // Populate form fields with the article data if found
      setFormData({
        title: article.title,
        author: article.author,
        description: article.description,
        content: article.content, // Populate content from the article data
      });
    }
  }, [id, articles]); // Re-run whenever the article ID or articles list changes

  const handleChange = (e) => {
    // Update form data state on input change
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    updateArticle(parseInt(id), formData); // Call the update function with the ID and updated form data

    // Show success message
    setSuccessMessage('Article updated successfully!');

    // Redirect after 2 seconds
    setTimeout(() => {
      setSuccessMessage(null); // Reset success message
      navigate('/dashboard'); // Redirect to articles list page
    }, 2000);
  };

  return (
    <div className="flex h-full bg-[#f5f9ee]">
    {/* Sidebar (Fixed) */}
    <div className="w-64 fixed h-screen bg-white shadow-md">
      <Sidebar />
    </div>

    {/* Main Content Wrapper */}
    <div className="flex-1 flex flex-col ml-72">
      {/* Top Bar (Sticky) */}
      
      <div className="sticky top-0 bg-white shadow-md z-10">
        <TopBar />
      </div>
        <div className=" w-4/6 mx-auto mt-12 p-10 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-play font-semibold text-center mb-6">Edit Article</h2>

          {/* Success message after submission */}
          {successMessage && (
            <div className="mb-4 p-3 text-green-800 bg-green-100 border border-green-300 rounded-md text-center">
              {successMessage}
            </div>
          )}

          {/* Form for editing article */}
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

            {/* New content field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Content</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none"
                rows="8"
                required
              ></textarea>
            </div>

            {/* Button to save the changes */}
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
