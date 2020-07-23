import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  {useHistory} from 'react-router-dom'
import {removeListItems, clearList} from '../../actions/moviesActions';
import Title from '../Title';   
  




const MyList = () => {

    const {listItems} = useSelector((state) => ({ listItems: state.movies.listItems }) )
    const dispatch = useDispatch()

    //Post data on LOCALSTORAGE Component Updated
    useEffect(() => {
        localStorage.setItem('listItems', JSON.stringify(listItems))
        
        //eslint-disable-next-line 
    }, [listItems]);

    const history = useHistory();
    const goBackHistory = () => history.goBack()

  
    if(!listItems.length) return<h2>No Movies Added </h2> 
    
     

    return (
        <div className="myList">   
         <Title titleName='My List' titleBg='title-bg'/> 
            <div className="container p-sm-1">
                <div className="row btn btn-warning mb-4 ml-3" >                 
                    <i className="fas fa-arrow-left"></i>
                    <span className="text-dark font-weight-bold ml-2" onClick={goBackHistory}>
                        Go Back
                    </span>                
                </div>
                            
                <div className="container ">
                    <table className="table text-light" >
                        <thead className="tbl-head">
                            <tr>                  
                                <th scope="col">Title</th>
                                <th scope="col">Runtime</th>
                                <th scope="col">Remove From List</th>
                            </tr>
                        </thead>
                        <tbody className="tbl-body">
                            {
                                listItems.map(item => 
                                <tr key={item.id}>                      
                                    <td>{item.title}</td>
                                    <td>{item.runtime + ' min'}</td>
                                    <td>
                                    <span onClick={() => dispatch( removeListItems(item.id) )} 
                                    className="button" >
                                        Remove
                                    </span></td>
                                </tr> )
                                
                            }
                        </tbody>
                    </table>
                    <div className="row justify-content-end px-3 mb-4">
                        <button onClick={() => dispatch( clearList() )} className="clear">
                            Clear
                        </button>
                    </div>
                </div>     
            </div>
        </div>
    )
}


export default MyList
// const mapStateToProps = (state) => ({
//     listItems: state.movies.listItems,
    
// })


// export default connect(mapStateToProps, {removeListItems, clearList})(MyList)
