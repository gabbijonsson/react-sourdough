import React from 'react';
import { Link } from 'react-router-dom';
import Masonjar from '../images/Masonjar.png';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="landingpage__container">
            <img className="landingpage__logo" src={Masonjar} alt="Masonjar with text"/>
            <Link to="/new"><button className="landingpage__createbtn squarebutton">Create Bread</button></Link>
            <div className="landingpage__p-wrapper">
                <p className="landingpage__started"><Link to="/started">Already started?</Link></p>
                <p className="landingpage__pipe">|</p>
                <p className="landingpage__faq"><Link to="/faq">FAQ</Link></p>
            </div>
        </div>
    )
}

export default LandingPage;