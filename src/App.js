import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/Signin';
import './App.css';

function App() {
   

  return (
    <Router>
       <Switch>
         <Route path="/" component={Home} exact />
         <Route path="/Signin" component={SigninPage} exact />
       </Switch>
    </Router>
  );
}

export default App;
