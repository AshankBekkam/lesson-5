import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shop from "./pages/shop/Shop"

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/Header';
import Sign from './pages/sign/Sign';



function App() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path = '/signin' component =  {Sign}/>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
