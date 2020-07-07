import React, {Fragment} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  {useHistory, NavLink} from 'react-router-dom'
import {addListItems} from '../../actions/moviesActions';
import Title from '../Title';   



const Details = () => {
    const {details, loading, listItems} = useSelector(state => ({
        details: state.movies.details,
        loading: state.movies.loading,
        listItems: state.movies.listItems,

    }))
    
    const dispatch = useDispatch()

    const history = useHistory();
    const goBackHistory = () => history.goBack('/')
    
    const urlImage = process.env.REACT_APP_IMG;


    
    if(loading || !details)return <h2>Loading...</h2>

    const {title, poster_path, genres, id, release_date, runtime, vote_average, overview} = details

    // const addMovie = title => 

    return (
        <Fragment>
        <Title titleName='Details' titleBg='primary' />
        <div className="container p-sm-3 mb-4">
            <div className="row btn btn-warning mb-3" >                 
                <i className="fas fa-arrow-left"></i>
                <span className="text-dark font-weight-bold ml-2" onClick={goBackHistory}>
                    Go Back
                </span>                
            </div>
        
            <div className="container mb-3">
                <h1 className="text-center">{title}</h1>
                <div className="row mb-4">
                    <img src={`${urlImage}/w500/${poster_path}`} className="m-auto" 
                    style={{ width: "250px",  height: 320 }} alt="poster" />
                </div>
                <div className="col-sm-12 col-md-8 mx-auto mb-3">
                    <p className="text-center mb-1">Genre: {genres.map(genre => genre.name).join(', ')}</p>
                    <p className="text-center mb-1">Releas Date: {release_date}</p>
                    <p className="text-center mb-1">Runtime: {runtime + ' min'}</p>
                    <p className="text-center mb-1">Rating: {vote_average} </p>
                    <p className="text-center mb-1">Overview: {overview} </p>
                </div>
                <div className="row">  
                <Fragment>
                    {                 
                        listItems.find(item => item.id === id) 
                        ?
                        <h4 className="m-auto">
                            <span class="badge badge-success">The Movie is Added</span>
                        </h4> 
                        :
                        <NavLink onClick={()=> dispatch( addListItems({title, id, runtime}) )} 
                        to='/my_list' className="btn btn-outline-primary m-auto" >
                            Add To List
                        </NavLink>
                    }
                </Fragment>
                </div>
            </div>
                        
        </div>  
        </Fragment>
 
    )
}

export default Details
// const mapStateToProps = (state) => ({
//     details: state.movies.details,
//     loading: state.movies.loading,
//     listItems: state.movies.listItems,
// })

// export default connect(mapStateToProps, {addListItems})(Details)
