import React from "react";
import { Link } from "react-router-dom";
import Masonjar from "../images/Masonjar.png";
import "./LandingPage.css";

function LandingPage() {
  function addRecipes() {
    console.log("recipes added");
    localStorage.setItem("recipes", JSON.stringify([
      {
        breadid: "001",
        ingredients: [
          {
            type: "flour",
            name: "vetemjöl special",
            amount: 100,
          },
          {
            type: "liquid",
            name: "vatten",
            amount: 0.6,
          },
          {
            type: "other",
            name: "salt",
            amount: 2,
          },
        ],
        notes: "I like bread",
        rating: 3,
        ratingnotes: 'very sour',
        finalized: true,
      },
      {
        breadid: "002",
        ingredients: [
          {
            type: "flour",
            name: "vetemjöl special",
            amount: 500,
          },
          {
            type: "liquid",
            name: "vatten",
            amount: 0.2,
          },
          {
            type: "other",
            name: "salt",
            amount: 3,
          },
        ],
        notes: "I bake bread",
        rating: 4,
        ratingnotes: 'very not sour',
        finalized: true,
      },
      {
        breadid: "003",
        ingredients: [
          {
            type: "flour",
            name: "vetemjöl special",
            amount: 100,
          },
          {
            type: "liquid",
            name: "vatten",
            amount: 0.6,
          },
          {
            type: "other",
            name: "salt",
            amount: 2,
          },
        ],
        notes: "",
        rating: 0,
        ratingnotes: '',
        finalized: false,
      }
    ]));
  };

  function addIngredients() {
      console.log('Ingredients added')
      localStorage.setItem('ingredients', JSON.stringify({
          'flours': ['vetemjöl special', 'tipo 00', 'ica eko'],
          'liquids': ['vatten', 'olivolja'],
          'others': ['salt', 'solroskärnor']
      }))
  };

  return (
    <div className="landingpage__container">
      <img
        className="landingpage__logo"
        src={Masonjar}
        alt="Masonjar with text"
      />
      <Link to="/new">
        <button className="landingpage__createbtn squarebutton">
          Create Bread
        </button>
      </Link>
      <div className="landingpage__p-wrapper">
        <p className="landingpage__started">
          <Link to="/started">Ongoing dough</Link>
        </p>
        <p className="landingpage__pipe">|</p>
        <p className="landingpage__faq">
          <Link to="/recipebank">Recipebank</Link>
        </p>
        <button onClick={addRecipes}>Add recipes</button>
        <button onClick={addIngredients}>Add ingredients</button>
      </div>
    </div>
  );
}

export default LandingPage;
