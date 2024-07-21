import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainBlog from './pages/MainBlog';
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
    <Router basename="/lovelace-logs">
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
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
