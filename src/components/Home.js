import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import {getPopularMovies} from '../actions/moviesActions'
// import axios from 'axios';



const Home = ({getPopularMovies, moviesPopular, loading}) => {

    const urlImage = process.env.REACT_APP_IMG;

    useEffect(() => {   
        getPopularMovies()  
        //eslint-disable-next-line   
    }, [])

    if(loading || !moviesPopular)return <h2>Loading...</h2>

    return(
        <section className="container p-sm-4 "> 
     
            <form>
                <div className="form-row">
                    <div className="form-group col-sm-8">
                        <input type="text" placeholder="Search Movie" className="form-control "/>                
                        <button className="btn btn-primary " type="submit" >
                            Search
                        </button>                 
                    </div>             
                </div>
            </form>          
  
        {/* GRID     */}
        
            <div className="container ">
                <div className="row justify-content-center " >   
                {         
                    !loading && moviesPopular.map(movie=>
                    <div className="card m-1" style={{ width: "200px" }}  key={movie.id} >
                            <img src={`${urlImage}/w500/${movie.poster_path}`} className="card-img-top" alt="poster" />
                            <div className="card-body">
                                <h5 className="card-title text-muted">{movie.title}</h5>
                                <a href="/" className="btn btn-warning text-light">Details</a>
                            </div>
                    </div>    
                
                    )
                }
                </div>
            </div>   
        </section>
  
    )
}

// state --> movies --> moviesReducer {moviesPopular, loading}
const mapStateToProps = state => ({
    moviesPopular: state.movies.moviesPopular,
    loading: state.movies.loading
});

export default connect(mapStateToProps, {getPopularMovies})(Home) 
