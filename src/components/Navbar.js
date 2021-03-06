import React, {useState} from 'react'




const Navbar = () => {

    const [open, setOpen] = useState(false)
    const change = open ? 'change' :  'nav-button'

    return (
   
        // <div className="container mb-5">
            <nav className="navbar navbar-expand-lg fixed-top nav-menu p-0">
                <a href="/" className="movieLink"><span className="font-weight-bold movie-app">
                    <i className="fas fa-film fa-3x"></i>
                </span></a>
                <button className={`navbar-toggler ${change}`} type="button" 
                data-toggle="collapse" data-target="#myNavbar" onClick={()=>setOpen(!open)}>
                    <div className="bg-light line1"></div>
                    <div className="bg-light line2"></div>
                    <div className="bg-light line3"></div>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="myNavbar">
                    <ul className="navbar-nav"> 
                        <li className="nav-item dropdown " >
                            <a  href="/" className="nav-link menu-item dropdown-toggle text-light px-2" 
                             data-toggle="dropdown" >
                                Movies
                            </a>           
                            <div className="dropdown-menu bg-warning" >
                                <a className="dropdown-item bg-warning"  href='/popular/1'>Poular Movies</a>
                                <a className="dropdown-item bg-warning"  href='/top_rated/1'>Top Rated Movies</a>
                                <a className="dropdown-item bg-warning"  href='/upcoming/1'>Upcoming Movies</a>
                            </div>
                        </li>      
                        <li className="nav-item">
                            <a className="nav-link menu-item text-light px-2"  href='/genres'>Genres</a>                  
                        </li>          
                        <li className="nav-item">
                            <a className="nav-link menu-item text-light px-2"  href='/artists/1'>Artists</a>                  
                        </li>           
                        <li className="nav-item">
                            <a className="nav-link menu-item text-light px-2"  href='/my_list'>My List</a>        
                        </li>           
                    </ul>
                </div>
            </nav>

    // </div> 
      
    )
}

export default Navbar
