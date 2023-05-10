import './index.scss';
import Home from './pages/Home/Home'
import News from './pages/News/News'
import Post from './pages/Post/Post'
import NotFound from './pages/NotFound/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={News} />
          <Route exact path="/news/:id" component={Post} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
