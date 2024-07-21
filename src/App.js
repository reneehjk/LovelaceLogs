// src/App.js
import React from 'react';
import MainBlog from './pages/MainBlog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NavBar from './pages/NavBar';
import AboutUs from './pages/AboutUs';
import WomenBlog from './pages/WomenBlog';
import ExperienceBlog from './pages/ExperienceBlog';
import TipsBlog from './pages/TipsBlog';
import OpportunityBlog from './pages/OpportunityBlog';
import Alanna from './pages/blogs/AlannaDIML.js';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/lovelace-logs" element={<LandingPage />} />
            <Route path="/blog" element={<MainBlog />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/women" element={<WomenBlog />} />
            <Route path="/experience" element={<ExperienceBlog />} />
            <Route path="/tips" element={<TipsBlog />} />
            <Route path="/opportunity" element={<OpportunityBlog />} />
            <Route path="/alannasdayinthelife" element={<Alanna />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
