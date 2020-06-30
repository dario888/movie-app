import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import {getPopularMovies} from '../actions/moviesActions'
import axios from 'axios';



const Home = () => {
    let name = process.env.REACT_APP_SECRET
    console.log(name);

    return(
        <section className="container p-5 ">
        <div className="row">              
            <div className="input-group mb-3 justify-content-center">
                <input type="text" placeholder="Search Movie" className="input"/>
                <div className="input-group-append">
                <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
        </div>         
        </section>
  
    )
}

export default connect(null, {getPopularMovies})(Home) 
