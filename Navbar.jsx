import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './logo.PNG';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
function Navbar () {

    return (
        <ul className="navbar">
            <h1><img src={logo} className="navbar-logo" /></h1>
            <Link to="/Home" className="navbar-item">Home</Link>
            <Link to="/BoardGames" className="navbar-item">Board Games</Link>
            <Link to="/Gadgets" className="navbar-item">Gadgets</Link>
            <Link to="/Gifts" className="navbar-item">Gifts</Link>
            <Link to="/Toys" className="navbar-item">Toys</Link>
            <Link to="/Logout" className="navbar-item">Logout</Link>
            
            <form action="/" method="get">
                <input type="text" id="navbar-search" name="s"  />
                <button class="btn btn-primary" type="button"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
        </ul>
    )
}

export default Navbar;