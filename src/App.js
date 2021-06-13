import Header from './components/header/index';
import Footer from './components/footer/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import './App.css'

function App() {
  return (
    <Router>
      <Route component={Header} />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
      <Route component={Footer} />
    </Router>
  );
}

export default App;
