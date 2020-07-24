import React, {Fragment} from 'react'
import  {useHistory} from 'react-router-dom'
import { searchMovies, setSearchTerm} from '../actions/moviesActions'
import { useDispatch, useSelector } from 'react-redux';




const Home = () => {

    const dispatch = useDispatch()

    // SET SEARCHMOVIES IN REDUCER
    const history = useHistory();

    // const [searchTerm, setSearchTerm] = useState('');
    
  const {searchTerm} = useSelector((state) => ({ searchTerm: state.movies.searchTerm }) )

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchMovies(searchTerm))
        history.push('/search_movies')
    }

    const handleChange = (e) =>dispatch(setSearchTerm(e.target.value));
    // setSearchTerm(e.target.value)


   return(
        <Fragment>
        <header className="homeHeader">
            <div className="container ">  
                <div className="row justify-content-center align-items-center ">
                    <h1 className="homeTitle px-4">The Movies-App</h1>
                    <div className="container-sm homeSearchBar">         
                        <form className="form-inline" onSubmit={handleSubmit}>
                            <div className="input-group mx-auto col-sm-11">
                                <input type="text" className="form-control" onChange={handleChange} 
                                required placeholder="Search Movie"/>                                     
                                <div className="input-group-append">
                                    <button type="submit" className="customBtn btnHomeSearch">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>                  
                    </div>

                    <p className="text-center px-1 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum earum 
                        illo expedita accusamus amet quas sint aspernatur autem doloremque eos,
                        facilis beatae optio, ducimus eaque. Velit dolores cupiditate dolorem a.
                        facilis beatae optio, ducimus eaque. Velit dolores cupiditate dolorem a.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum earum 
                        illo expedita accusamus amet quas sint aspernatur autem doloremque eos,
                        facilis beatae optio, ducimus eaque. Velit dolores cupiditate dolorem a.
                        facilis beatae optio, ducimus eaque. Velit dolores cupiditate dolorem a.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum earum 
                
                    </p>
                </div>     
            </div>
        </header>

        <section id="about" className="about">
            <div className="container-fluid">
                <div className="row">                                     
                    <div className="col-md-6 height-80 px-3 d-flex align-items-center 
                    justify-content-center">
                        <div className="text-center">
                            <div className="row mb-5">
                                <div className="col text-center">
                                    <h1 className="display-3 text-dark">
                                        <strong>ABOUT</strong>
                                    </h1>
                                    <div className="titleUnderline bg-warning"></div>
                                </div>
                            </div>
            
                            <p className="text-light ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Architecto, impedit!
                            </p>              
                            <p className="text-light ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Architecto, impedit!
                        
                            </p> 
                            <p className="text-light ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Architecto, impedit!
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 about-picture height-80"></div>  
                </div>
            </div>
        </section>
        </Fragment>

    )
}

export default Home
