import React from "react";
import MenuBar from "./MenuBar";
import { Link } from "react-router-dom";
import "./FaqPage.css";
import Masonjar from "../images/Masonjar.png";

function FaqPage() {
  return (
    <>
      <MenuBar />
      <div className="faqpage__container">
        <p className="faqpage__sorry">
          We haven’t gotten enough questions to have an FAQ yet.
          <br />
          At the bottom of each page you can click the Info-button for more
          information about how to use the app.
          <br />
          <br />
          Feel free to contact us with any question on <br />
          hello@sourdoughtracker.com
        </p>
        <Link to="/">
          <img className="faqpage__logo" src={Masonjar} alt="Masonjar logo" />
        </Link>
      </div>
    </>
  );
}

export default FaqPage;
