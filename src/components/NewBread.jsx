import React from "react";
import Menu from "./MenuBar";
import { Link } from 'react-router-dom';
import "./NewBread.css";

function NewBread() {
  return (
    <>
      <Menu />
      <h2 className="newbread__breadid">BREAD ID: 001</h2>
      <div className="newbread__container">
        <h1 className="newbread__recipetitle">RECIPE</h1>
        <button id="newbread__add" className="squarebutton">
          ADD
        </button>
        <button id="newbread__edit" className="squarebutton">
          EDIT
        </button>
        <p className="newbread__hydration">Hydration: 50%</p>
        <div className="newbread__ingredientlist">
          <div className="newbread__flours">
            <h2 className="newbread__ingredient-title">Flours</h2>
          </div>
          <div className="newbread__grams">
            <h2 className="newbread__ingredient-title">Grams</h2>
          </div>
          <div className="newbread__percent">
            <h2 className="newbread__ingredient-title">%</h2>
          </div>
        </div>
        <Link className="createbread__link" to="/notes"><button className="createbread__continue squarebutton">Continue</button></Link>
        <Link className="createbread__link" to="/started"><button className="createbread__store">Store</button></Link>
      </div>
    </>
  );
}

export default NewBread;
