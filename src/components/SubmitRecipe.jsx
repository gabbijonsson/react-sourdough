import React from "react";
import { Link } from "react-router-dom";
import Menu from "./MenuBar";
import "./SubmitRecipe.css";
import QueryUtil from '../util/QueryUtil'

function SubmitRecipe(props) {
  let breadId = QueryUtil.getQueryParameter('breadid', props.location.search);
  if (!breadId) {
    breadId = '---';
  }
  
  console.log(props)

  return (
    <>
      <Menu />
    <h2 className="newbread__breadid">BREAD ID: {breadId}</h2>
      <div className="submitbread__container">
        <h1 className="submitbread__title">SUBMIT RECIPE</h1>
        <div className="submitbread__ratingcontainer">
          <div className="submitbread__star">☆</div>
          <div className="submitbread__star">☆</div>
          <div className="submitbread__star">☆</div>
          <div className="submitbread__star">☆</div>
          <div className="submitbread__star">☆</div>
        </div>
        <p className="submitbread__ratetext">
        Rate the result of this recipe.
        </p>
        <Link className="breadnotes__link" to="/">
          <button className="createbread__continue squarebutton">
            Submit
          </button>
        </Link>
        <Link className="breadnotes__link" to="/started">
          <button className="createbread__store">Store</button>
        </Link>
      </div>
    </>
  );
}

export default SubmitRecipe;
