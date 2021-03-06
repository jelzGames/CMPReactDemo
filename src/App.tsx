import React from 'react';
import './App.css';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import { SidebarData } from './data/SidebarData';
import Layout from "barracuda-layout-template";


const App : React.FC = () => {
  return (
    <>
      <Router>
        <Layout items={SidebarData} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
