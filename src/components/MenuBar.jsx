import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './MenuBar.css';

function MenuBar() {
    return (
        <Menu width='350px'>
            <Link to="/home" id="home" className="menu-item">Home</Link>
            <Link to="/started" id="started" className="menu-item">Ongoing</Link>
            <Link to="/recipebank" id="recipebank" className="menu-item">Recipebank</Link>
            <Link to="/flours" id="flours" className="menu-item">Flours</Link>
        </Menu>
    )
}

export default MenuBar;