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
        <form>
        <select id="ingredient" name="ingredient">
          <option disabled>--- FLOURS ---</option>
          <option disabled>--- LIQUIDS ---</option>
          <option>Water</option>
          <option>Milk</option>
          <option disabled>--- OTHERS ---</option>
          <option>Olive Oil</option>
          <option>Salt</option>
          <option>Seeds</option>
        </select>
        <input id="ingredient-submitbtn" className="squarebutton" type="submit" value="ADD" />
        </form>
        <p className="newbread__hydration">Hydration: 50%</p>
        <div className="newbread__ingredientlist">
          <div className="newbread__flours">
            <h2 className="newbread__ingredient-title">Ingredients</h2>
          </div>
          <div className="newbread__grams">
            <h2 className="newbread__ingredient-title">Grams</h2>
          </div>
        </div>
        <Link className="createbread__link" to="/submit"><button className="createbread__continue squarebutton">Finalize</button></Link>
      </div>
    </>
  );
}

export default NewBread;
