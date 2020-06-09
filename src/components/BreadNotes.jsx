import React from "react";
import Menu from "./MenuBar";
import { Link } from "react-router-dom";
import './BreadNotes.css';

function BreadNotes() {
  return (
    <>
      <Menu />
      <h2 className="newbread__breadid">BREAD ID: 001</h2>
      <div className="breadnotes__container">
        <h1 className="breadnotes__title">NOTES</h1>
        <button id="breadnotes__edit" className="squarebutton">
          EDIT
        </button>
        <div className="breadnotes__listcontainer">
          <p>Notes about how I bake my bread</p>
          <p>Notes about how I bake my bread</p>
          <p>Notes about how I bake my bread</p>
          <p>Notes about how I bake my bread</p>
          <p>Notes about how I bake my bread</p>
        </div>
        <Link className="breadnotes__link" to="/submit">
          <button className="createbread__continue squarebutton">
            Finalize
          </button>
        </Link>
        <Link className="breadnotes__link" to="/started">
          <button className="createbread__store">Store</button>
        </Link>
      </div>
    </>
  );
}

export default BreadNotes;
