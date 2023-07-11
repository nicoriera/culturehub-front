import React, { useState } from "react";
import "./styles/index.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// PAGES
import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";
import News from "./pages/News/News";
import Music from "./pages/Music/Music";
import Cinema from "./pages/Cinema/Cinema";
import Series from "./pages/Series/Series";
import VideoGames from "./pages/VideoGames/VideoGames";
import HighTech from "./pages/HighTech/HighTech";
import NotFound from "./pages/NotFound/NotFound";
import Admin from "./pages/Admin/Admin";
// COMPONENTS
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const mainContentClassName = isNavbarOpen
    ? "main-content fixed"
    : "main-content";
  return (
    <Router>
      <Navbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
      <div className={mainContentClassName}>
        <Routes>
          <Route path="/articles/news" element={<News />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="/articles/musique" element={<Music />} />
          <Route path="/articles/cinema" element={<Cinema />} />
          <Route path="/articles/serie" element={<Series />} />
          <Route path="/articles/jeuxvideo" element={<VideoGames />} />
          <Route path="/articles/hightech" element={<HighTech />} />
          <Route path="/admin" element={<Admin />} />

          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
