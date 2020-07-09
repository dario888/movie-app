import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Home from './components/Home';
import SearchMovies from './components/Movies/SearchMovies';
import Navbar from './components/Navbar';
import Details from './components/Movies/Details';
import MyList from './components/Movies/MyList';
import TopRatedMovies from './components/Movies/TopRatedMovies';
import UpcomingMoves from './components/Movies/UpcomingMoves';
import store from './store';

import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/search_movies' component={SearchMovies}/>
      <Route exact path='/details' component={Details}/>
      <Route exact path='/my_list' component={MyList}/>
      <Route exact path='/top_rated_movies' component={TopRatedMovies}/>
      <Route exact path='/upcoming_movies' component={UpcomingMoves}/>
    </Switch>
    </Provider>
    </BrowserRouter>

  );
}

export default App;
