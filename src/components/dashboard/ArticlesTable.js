import React, { useState } from 'react';   
import { useNavigate } from 'react-router-dom'; // Import navigation hook
import { useArticles } from '../../context/ArticlesContext'; // Import context
import { Trash2, Edit } from "lucide-react"; // Import icons
import TopBar from './Topbar';
import Sidebar from './Sidebar';

const ArticlesTable = () => {
  const { articles, deleteArticle } = useArticles();
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useNavigate(); // Use navigation for edit

  const handleDelete = (id) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    if (deleteId !== null) {
      deleteArticle(deleteId);
      setDeleteId(null);
    }
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
        <div className="mx-10 mt-10 p-12 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold font-play text-left mb-6">All Articles</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-[#ececec] py-2">
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Author</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Content</th> {/* Added Content Column */}
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id} className="border-b">
                  <td className="px-4 py-2">{article.title}</td>
                  <td className="px-4  py-2">{article.author}</td>
                  <td className="px-4 py-2 max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap 
                    hover:whitespace-normal hover:overflow-visible hover:h-auto hover:bg-gray-50 
                    transition-all duration-300">
                    {article.description}
                  </td>
                  <td className="px-4 py-2 max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap 
                       
                    transition-all duration-300">
                    {article.content} {/* Added the content field */}
                  </td>
                  <td className="px-4 py-2">{article.date}</td>
                  <td className="px-4 py-2 flex space-x-4">
                    <button 
                      className="text-[#a03246] "
                      onClick={() => handleDelete(article.id)}
                    >
                      <Trash2 size={20} />
                    </button>
                    <button 
                      className="text-[#303A30] "
                      onClick={() => navigate(`/edit/${article.id}`)} // Redirect to edit page
                    >
                      <Edit size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Delete Confirmation Modal */}
        {deleteId !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-semibold">Are you sure you want to delete this article?</p>
              <div className="flex justify-end space-x-4 mt-4">
                <button 
                  className="px-4 py-2 bg-[gray-300] rounded-md hover:bg-gray-400"
                  onClick={() => setDeleteId(null)}
                >
                  Cancel
                </button>
                <button 
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
                  onClick={confirmDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

      </div>  
    </div>
  );
};

export default ArticlesTable;
