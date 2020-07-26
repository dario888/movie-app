import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  {useHistory} from 'react-router-dom'
import {removeListItems, clearList} from '../../actions/moviesActions';

  




const MyList = () => {
    
    const {listItems} = useSelector((state) => ({ listItems: state.movies.listItems }) )
    const dispatch = useDispatch()
    
    //Post data on LOCALSTORAGE Component Updated
    useEffect(() => {
        localStorage.setItem('listItems', JSON.stringify(listItems))
        
        //eslint-disable-next-line 
    }, [listItems]);
    
    const history = useHistory();
    const goBackHistory = () => history.push('/')
    
    if(!listItems.length) return(
        <div className="errormDiv px-2 text-center">
            <h2 className="errormMsg">No Movie Added, Pleace Add A Movie </h2>
        </div>  
    )

    const height100 =  listItems.length > 8 && 'height-100'; 

     

    return (
        <div className={`myList ${height100}`}>   
            <div className="container p-sm-1 ">
                    <table className="table  text-light" >
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
                                    <span onClick={() => dispatch(removeListItems(item.id) )} 
                                    className="customBtn remove" >
                                        Remove
                                    </span></td>
                                </tr> )
                                
                            }
                        </tbody>
                    </table>
                    <div className="row justify-content-around pb-4">                  
                        <button className="goBackBtn" onClick={goBackHistory}>
                            Go Back
                        </button>                
             
                        <button onClick={() => dispatch( clearList() )} className="customBtn clear">
                            Clear
                        </button>
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
