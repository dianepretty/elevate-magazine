import React, { createContext, useContext, useState, useEffect } from 'react';

const ArticlesContext = createContext();

export const useArticles = () => useContext(ArticlesContext);

export const ArticlesProvider = ({ children }) => {
  // Predefined articles
  const defaultArticles = [
    { id: 1, title: 'Article 1', author: 'John Doe', date: '2025-03-01', description: 'This is a description for article 1.' },
    { id: 2, title: 'Article 2', author: 'Jane Smith', date: '2025-03-02', description: 'This is a description for article 2.' },
    { id: 3, title: 'Article 3', author: 'Alice Johnson', date: '2025-03-03', description: 'This is a description for article 3.' },
    { id: 4, title: 'Article 4', author: 'Bob Brown', date: '2025-03-04', description: 'This is a description for article 4.' },
  ];

  // Load articles from localStorage or use default articles
  const loadArticles = () => {
    const storedArticles = localStorage.getItem('articles');
    return storedArticles ? JSON.parse(storedArticles) : defaultArticles;
  };

  const [articles, setArticles] = useState(loadArticles);

  // Save articles to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('articles', JSON.stringify(articles));
  }, [articles]);

  // Function to add an article
  const addArticle = (newArticle) => {
    setArticles((prevArticles) => [newArticle, ...prevArticles]);
  };

  // Function to delete an article
  const deleteArticle = (id) => {
    setArticles((prevArticles) => prevArticles.filter(article => article.id !== id));
  };

  // Function to update an article
  const updateArticle = (id, updatedData) => {
    setArticles((prevArticles) => prevArticles.map(article =>
      article.id === id ? { ...article, ...updatedData } : article
    ));
  };

  return (
    <ArticlesContext.Provider value={{ articles, addArticle, deleteArticle, updateArticle }}>
      {children}
    </ArticlesContext.Provider>
  );
};
