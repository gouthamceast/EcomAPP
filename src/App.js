import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import './pages/homepage/homepage.styles.scss'

import {Switch,Route} from 'react-router-dom'


const SecPage = () =>(
  <div>
    <h1>Second page</h1>
  </div>
)

const thirdPage = () =>(
  <div>
    <h1> third page summa </h1>
  </div>
)

const fourPage =(props)=>(
 
  <div>
    {console.log(props)}
    <h1> four page summa </h1>
  </div>
)

function App() {
  return (
    <div>
    <Switch>
    <Route exact = {false} path = '/' component = {SecPage} />
    <Route exact path = '/23' component={thirdPage} />
    <Route exact path = '/foot' component = {fourPage} /> 
    </Switch>
    </div>
  );
}

export default App;
