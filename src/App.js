import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

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
import './Artist.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {

  return (
    <BrowserRouter>
    <Provider store={store}>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/popular/:num?' component={PopularMovies}/>
      <Route exact path='/search_movies/:num?' component={SearchMovies}/>
      <Route exact path='/details' component={Details}/>
      <Route exact path='/my_list' component={MyList}/>
      <Route exact path='/top_rated/:num?' component={TopRatedMovies}/>
      <Route exact path='/upcoming/:num?' component={UpcomingMoves}/>
      <Route exact path='/genres/:num?' component={Genres}/>
      <Route exact path='/artists/:num?' component={Artists}/>
      <Route exact path='/artist_details' component={AritstsDetails}/>
      <Route exact path='/search_artist/:num?' component={SearchArtists}/>
    </Switch>
    <Footer />
    </Provider>
    </BrowserRouter>

  );
}

export default App;
