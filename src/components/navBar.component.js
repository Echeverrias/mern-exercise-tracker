import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {

    return (
        <div className='navBar'>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <NavLink 
                    to='/'
                    className="navbar-brand"
                >
                    ExcerTracker
                </NavLink>
                <div className='collapse navbar-collapse'>
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <NavLink 
                                to='/'
                                className="nav-link"
                            >
                                Excercises
                            </NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink 
                                to='/create'
                                className="nav-link"
                            >
                                Create Excercise
                            </NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink 
                                to='/user'
                                className="nav-link"
                            >
                                Create User
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;