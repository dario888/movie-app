import React from 'react'
import {NavLink} from 'react-router-dom'




const Navbar = () => {

    return (
        <div className="mb-5">
            <nav className="navbar navbar-expand-lg bg-dark text-light fixed-top">
                <span className="font-weight-bold movie-app">MOVIE-APP</span>
                <div className="collapse navbar-collapse justify-content-end" id="myNavbar">
                    <div className="navbar-nav">           
                        <NavLink className="menu-item m-2" activeClassName="nav-active" exact to='/'>Home</NavLink>                            
                        <NavLink className="menu-item m-2" activeClassName="nav-active" exact to='/tvshows'>TV Shows</NavLink>                  
                        <NavLink className="menu-item m-2" activeClassName="nav-active" exact to='/my_list'>My List</NavLink>                
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
