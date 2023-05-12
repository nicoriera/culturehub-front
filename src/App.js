import './styles/index.scss';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Post from './pages/Post/Post';
import Articles from './pages/Articles/Articles';
import PostNew from './pages/PostNew/PostNew';
import NotFound from './pages/NotFound/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';


const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/articles" element={<Articles/>} />
          <Route path="/articles/:id" element={<Post/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/news/:id" element={<PostNew/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </Router>
  );
}

export default App;
