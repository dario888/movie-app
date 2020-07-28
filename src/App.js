import React, {Suspense} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Spinner from './Spinner'
import './App.css';
import './Artist.css';

//---------------------------------------- Code Spliting --------------------------------------------
const  PopularMovies = React.lazy(()=> import('./components/Movies/PopularMovies'));
const  TopRatedMovies = React.lazy(()=> import('./components/Movies/TopRatedMovies'));
const  UpcomingMoves = React.lazy(()=> import('./components/Movies/UpcomingMoves'));
const  Details = React.lazy(()=> import('./components/Movies/Details'));
const  SearchMovies = React.lazy(()=> import('./components/Movies/SearchMovies'));
const  Genres = React.lazy(()=> import('./components/Genres/Genres'));
const  Artists = React.lazy(()=> import('./components/Artists/Artists'));
const  AritstsDetails = React.lazy(()=> import('./components/Artists/AritstsDetails'));
const  SearchArtists = React.lazy(()=> import('./components/Artists/SearchArtists'));
const  MyList = React.lazy(()=> import('./components/Movies/MyList'));



function App() {

  return (
    <BrowserRouter>
    <Provider store={store}>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Suspense fallback={Spinner}>
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
      </Suspense>
    </Switch>
    <Footer />
    </Provider>
    </BrowserRouter>

  );
}

export default App;
