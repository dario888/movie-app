import React from 'react'
import {NavLink} from 'react-router-dom'




const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-dark text-light mb-4">
            <span className="font-weight-bold movie-app">MOVIE-APP</span>
            <div className="collapse navbar-collapse justify-content-end" id="myNavbar">
                <div className="navbar-nav">           
                    <NavLink className="menu-item m-2" activeClassName="nav-active" exact to='/'>Movies</NavLink>                            
                    <NavLink className="menu-item m-2" activeClassName="nav-active" exact to='/tvshows'>TV Shows</NavLink>                  
                    <NavLink className="menu-item m-2" activeClassName="nav-active" exact to='/artists'>Artists</NavLink>                
                </div>
            </div>
        </nav>
    )
}

export default Navbar
