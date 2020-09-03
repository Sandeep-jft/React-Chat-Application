import React from 'react';

import './App.css';
import SignUp from './components/SignUp';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
   
     <Switch>
     <Route exact path="/" component={SignUp} />
     <Route exact path="/Login" component={Login} />
    
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
