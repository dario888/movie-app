import React, {useState} from 'react'




const Navbar = () => {

    const [open, setOpen] = useState(false)
    const change = open ? 'change' :  'nav-button'

    return (
   
        <div className="container mb-5">
            <nav className="navbar navbar-expand-lg bg-dark fixed-top nav-menu ">
                <a href="/" className="movieLink"><span className="font-weight-bold movie-app">MOVIE-APP</span></a>
                <button className={`navbar-toggler ${change}`} type="button" 
                data-toggle="collapse" data-target="#myNavbar" onClick={()=>setOpen(!open)}>
                    <div className="bg-light line1"></div>
                    <div className="bg-light line2"></div>
                    <div className="bg-light line3"></div>
                </button>
                <div className="collapse navbar-collapse bg-dark justify-content-end" id="myNavbar">
                    <ul className="navbar-nav"> 
                        <li className="nav-item dropdown" >
                            <a  href="/" className="nav-link menu-item dropdown-toggle text-light px-2" 
                             data-toggle="dropdown" >
                                Movies
                            </a>           
                            <div className="dropdown-menu bg-dark" >
                                <a className="dropdown-item bg-dark text-light"  href='/'>Poular Movies</a>
                                <a className="dropdown-item bg-dark text-light"  href='/top_rated_movies'>Top Rated Movies</a>
                                <a className="dropdown-item bg-dark text-light"  href='/upcoming_movies'>Upcoming Movies</a>
                            </div>
                        </li>      
                        <li className="nav-item">
                            <a className="nav-link menu-item text-light px-2"  href='/genres'>Genres</a>                  
                        </li>          
                        <li className="nav-item">
                            <a className="nav-link menu-item text-light px-2"  href='/tvshows'>Artists</a>                  
                        </li>           
                        <li className="nav-item">
                            <a className="nav-link menu-item text-light px-2"  href='/my_list'>My List</a>        
                        </li>           
                    </ul>
                </div>
            </nav>

        </div>
      
    )
}

export default Navbar
