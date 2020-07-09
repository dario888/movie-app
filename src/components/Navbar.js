import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'




const Navbar = () => {

    const [open, setOpen] = useState(false)
    const change = open ? 'change' :  'nav-button'
    // const myNavbar = open ? 'change' :  'nav-button'

    return (
   
        <div className="container  mb-5">
            <nav className="navbar navbar-expand-lg bg-dark fixed-top nav-menu ">
                <span className="font-weight-bold movie-app">MOVIE-APP</span>
                <button className={`navbar-toggler ${change}`} type="button" 
                data-toggle="collapse" data-target="#myNavbar" onClick={()=>setOpen(!open)}>
                    <div className="bg-light line1"></div>
                    <div className="bg-light line2"></div>
                    <div className="bg-light line3"></div>
                </button>
                <div className="collapse navbar-collapse bg-dark justify-content-end" id="myNavbar">
                    <ul className="navbar-nav"> 
                        <li className="nav-item dropdown" data-toggle="dropdown">
                            <NavLink className="nav-link menu-item text-light font-weight-bold px-2" 
                            type="button" id="dropdownMenuButton" data-toggle="dropdown" exact to='/' >
                                Home
                            </NavLink>           
                            <div className="dropdown-menu bg-dark " >
                                <NavLink className="dropdown-item bg-dark text-light" exact to='/top_rated_movies'>Top Rated Movies</NavLink>
                                <NavLink className="dropdown-item bg-dark text-light" exact to='/upcoming_movies'>Upcoming Movies</NavLink>
                            </div>
                        </li>      
                        <li className="nav-item">
                            <NavLink className="nav-link menu-item text-light font-weight-bold px-2" exact to='/tvshows'>TV Shows</NavLink>                  
                        </li>           
                        <li className="nav-item">
                            <NavLink className="nav-link menu-item text-light font-weight-bold px-2" exact to='/tvshows'>Genres</NavLink>                  
                        </li>          
                        <li className="nav-item">
                            <NavLink className="nav-link menu-item text-light font-weight-bold px-2" exact to='/my_list'>My List</NavLink>        
                        </li>           
                    </ul>
                </div>
            </nav>

        </div>
    
    )
}

export default Navbar
