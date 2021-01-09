import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Products from './pages/Products';
import Team from './pages/Team';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/products" exact component={Products} />
          <Route path="/team" exact component={Team} />
          <Route path="/support" exact component={Support} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
