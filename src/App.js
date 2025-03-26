import React from 'react';
import Home from './pages/Home';
import Articles from './pages/All_articles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleView from "./pages/ArticleView";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { ArticlesProvider } from './context/ArticlesContext';
import CreateArticleForm from './components/dashboard/CreateArticleForm';
import ArticlesTable from './components/dashboard/ArticlesTable';
import EditArticleForm from './components/website/EditArticleForm';
import { AuthProvider } from './context/AuthContext';
import NotFound from './components/website/NotFound';
import ProtectedRoute from './components/dashboard/ProtectedRoute';
import Profile from './pages/dahboardpages/Profile';

const App = () => {
  return (
    <AuthProvider>
      <ArticlesProvider>
        <Router className="font-Montserrat">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/article/:id" element={<ArticleView />} />
            <Route path="/dashboard/profile" element={<Profile/>} />
            
            {/* Protected dashboard routes */}
            <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
            <Route path="/dashboard/create-article" element={<ProtectedRoute element={<CreateArticleForm />} />} />
            <Route path="/dashboard/all-articles" element={<ProtectedRoute element={<ArticlesTable />} />} />
            <Route path="/edit/:id" element={<ProtectedRoute element={<EditArticleForm />} />} />


            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ArticlesProvider>
    </AuthProvider>
  );
};

export default App;
