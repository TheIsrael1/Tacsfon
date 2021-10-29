import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/index'
import About from './pages/About'
import  Contact  from './pages/Contact';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Media from './pages/Media';
import './App.css';

function App() {
   

  return (
    <Router>
       <Switch>
         <Route path="/" component={Home} exact />
         <Route path="/about" component={About} exact />
         <Route path="/gallery" component={Gallery} exact />
         <Route path="/events" component={Events} exact />
         <Route path="/contact" component={Contact} exact />
         <Route path="/media" component={Media} exact />
       </Switch>
    </Router>
  );
}

export default App;
