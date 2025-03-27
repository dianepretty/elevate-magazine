import React, { useState } from 'react';
import { useArticles } from '../../context/ArticlesContext'; 
import TopBar from './Topbar';
import Sidebar from './Sidebar';

const CreateArticleForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const { addArticle } = useArticles();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      id: Date.now(),
      title,
      author,
      description,
      content,
      date: new Date().toISOString(),
    };

    addArticle(newArticle);
    setSuccessMessage('Article added successfully!');

    setTitle('');
    setAuthor('');
    setDescription('');
    setContent('');

    setTimeout(() => setSuccessMessage(null), 3000);
  };

  return (
    <div className="flex h-screen bg-[#f5f9ee]">
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

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-3xl mx-auto mt-10 p-10 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-center font-play mb-6">Create New Article</h2>

            {successMessage && (
              <div className="mb-4 p-3 text-green-800 bg-green-100 border border-green-300 rounded-md text-center">
                {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="author">
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none"
                  required
                ></textarea>
              </div>

              {/* Content Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="content">
                  Content
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none h-40"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-[#303A30] text-white rounded-md hover:bg-[#262626] focus:outline-none"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateArticleForm;
