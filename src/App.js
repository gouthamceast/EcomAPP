import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage/homepage.component'
import ShopPage from './pages/homepage/shoppage/shop-page.component'
import './pages/homepage/homepage/homepage.styles.scss'
import Header from './components/header-component/header.component'

import {Switch,Route} from 'react-router-dom'


function App() {
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact  path = '/' component = {HomePage} />
    <Route exact path = '/shop' component = {ShopPage}/> 
    </Switch>
    </div>
  );
}

export default App;
