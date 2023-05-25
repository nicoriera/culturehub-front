import "./styles/index.scss";
import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";
import News from "./pages/News/News";
import Music from "./pages/Music/Music";
import Cinema from "./pages/Cinema/Cinema";
import Series from "./pages/Series/Series";
import VideoGames from "./pages/VideoGames/VideoGames";
import HighTech from "./pages/HighTech/HighTech";
import NotFound from "./pages/NotFound/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/articles/news" element={<News />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="/articles/musique" element={<Music />} />
          <Route path="/articles/cinema" element={<Cinema />} />
          <Route path="/articles/serie" element={<Series />} />
          <Route path="/articles/jeuxvideo" element={<VideoGames />} />
          <Route path="/articles/hightech" element={<HighTech />} />

          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
