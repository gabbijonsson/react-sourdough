import React from "react";
import Menu from "./MenuBar";
import { Link } from 'react-router-dom';
import './OngoingPage.css';

function OngoingPage() {
  return (
    <>
      <Menu />
      <div className="ongoingpage__container">
        <p>Ooops...! Seems like you don't have any started doughs.</p>
        <Link to="/new" className="ongoingpage__link"><button className="ongoingpage__createbtn squarebutton">
          Create Bread
        </button>
        </Link>
      </div>
    </>
  );
}

export default OngoingPage;
