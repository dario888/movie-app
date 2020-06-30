import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Home from './components/Home';
import Navbar from './components/Navbar';
import store from './store';

import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
    </Provider>
    </BrowserRouter>

  );
}

export default App;
