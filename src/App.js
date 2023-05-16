import './styles/index.scss';
import Home from './pages/Home/Home';
import Article from './pages/Article/Article';
import Articles from './pages/Articles/Articles';
import NotFound from './pages/NotFound/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/articles" element={<Articles/>} />
          <Route path="/articles/:id" element={<Article/>} />
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </Router>
  );
}

export default App;
