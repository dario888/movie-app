import React, {Fragment} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  {useHistory, NavLink} from 'react-router-dom'
import {addListItems} from '../../actions/moviesActions';
import Spinner from '../../Spinner';      




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
    
    if(loading || !details)return <Spinner />

    const {title, backdrop_path, genres, id, release_date, runtime, vote_average, overview} = details
   


    return (
        <Fragment>
        <div className="contaier-fluid mainDiv">
            <div className="imgDetails text-center p-0">     
                <div className="row mainImg mb-2" 
                style={{
                background: `linear-gradient(rgba(0, 0, 0,.3), rgba(0, 0, 0,.5)),
                url(${urlImage}/w1280/${backdrop_path})no-repeat center center/cover` }}>
                </div>
                <div className="col-sm-12 col-md-8 mx-auto text-center detailInfo">
                    <h1 className="">{title}</h1>
                    <p className="mb-1">Genre: {genres.map(genre => genre.name).join(', ')}</p>
                    <p className="mb-1">Releas Date: {release_date}</p>
                    <p className="mb-1">Runtime: {runtime + ' min'}</p>
                    <p className="mb-1">Rating: {vote_average} </p>
                    <p className="mb-1">Overview: {overview} </p>
                    <button className="goBackBtn mt-3" onClick={goBackHistory}>
                        Go Back
                    </button>               
                </div>                    
            </div>  

            <div className="row justify-content-center movieAdd">  
            <Fragment>
                {                 
                    listItems.find(item => item.id === id) 
                    ?
                    <h4 className="">
                        <span className="badge badge-success ">The Movie is Added</span>
                    </h4> 
                    :
                    <NavLink onClick={()=> dispatch( addListItems({title, id, runtime}) )} 
                    to='/my_list' className="btn btn-outline-primary" >
                        Add To List
                    </NavLink>
                }
            </Fragment>
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
