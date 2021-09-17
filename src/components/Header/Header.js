import React from 'react';
import './Header.css';
import {Link}  from 'react-router-dom';


export default function Header(){

    return(
        <div className='header'>
            <h3>Lambda Eats</h3>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/pizza">Order now</Link>
            </nav>
        </div>
    )
}
