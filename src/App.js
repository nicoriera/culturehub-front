import './index.scss';
import Home from './pages/Home/Home'
import News from './pages/News/News'
import Post from './pages/Post/Post'
import Articles from './pages/Articles/Articles'
import PostNew from './pages/PostNew/PostNew'
import NotFound from './pages/NotFound/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route exact path="/articles" element={<Articles/>} />
          <Route exact path="/articles/:id" element={<Post/>} />
          <Route exact path="/news" element={<News/>} />
          <Route exact path="/news/:id" element={<PostNew/>} />
          <Route element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
