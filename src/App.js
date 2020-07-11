import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Navbar from './components/Navbar';
import SearchMovies from './components/Movies/SearchMovies';
import PopularMovies from './components/Movies/PopularMovies';
import Genres from './components/Genres/Genres';
import Details from './components/Movies/Details';
import MyList from './components/Movies/MyList';
import TopRatedMovies from './components/Movies/TopRatedMovies';
import UpcomingMoves from './components/Movies/UpcomingMoves';
import Artists from './components/Artists/Artists';
import SearchArtists from './components/Artists/SearchArtists';
import AritstsDetails from './components/Artists/AritstsDetails';
import store from './store';

import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <Navbar />
    <Switch>
      <Route exact path='/' component={PopularMovies}/>
      <Route exact path='/search_movies' component={SearchMovies}/>
      <Route exact path='/details' component={Details}/>
      <Route exact path='/my_list' component={MyList}/>
      <Route exact path='/top_rated_movies' component={TopRatedMovies}/>
      <Route exact path='/upcoming_movies' component={UpcomingMoves}/>
      <Route exact path='/genres' component={Genres}/>
      <Route exact path='/artists' component={Artists}/>
      <Route exact path='/artist_details' component={AritstsDetails}/>
      <Route exact path='/search_artist' component={SearchArtists}/>
    </Switch>
    </Provider>
    </BrowserRouter>

  );
}

export default App;
