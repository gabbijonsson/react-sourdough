import React from "react";
import Menu from "./MenuBar";
import { Link } from 'react-router-dom';
import "./NewBread.css";
import ApiHandler from "../util/ApiHandler";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


function NewBread() {

  const { register, handleSubmit } = useForm();
  const [id, setId] = useState(1);
  const [hydration, setHydration] = useState(0);
  const [ingredients, setIngredients] = useState([])

  useEffect(() => { 
    setId(ApiHandler.getNextId());
  }, []);  

  function displayFlours() {
    let flours = ApiHandler.getFlours();
    return flours.map((flour) => <option key={flours.indexOf(flour)} value={'flour_'+flour.name}>{flour.name}</option>)
  }

  const onSubmit = (ingredientToAdd, e) => {
    let ingredientParts = ingredientToAdd.ingredient.split('_');

    let newIngredient = {name: ingredientParts[1], type: ingredientParts[0]};

    console.log(newIngredient)

    setIngredients([...ingredients].concat([newIngredient]));
  };

  //TODO: Uppdatera hydration, total flour-mängd för bakers %
  function handleIngredientChange(ingredient, event) {
    console.log(ingredient)
    event.target.getAttribute('ingredienttype')
    console.log(event.target.getAttribute('ingredienttype'));
  }

  function displayIngredient(ingredient) {
    return (
      <li key={ingredients.indexOf(ingredient)}>
        <p>{ingredient.name}</p>
        <input ingredienttype={ingredient.type} type="number" onChange={(event) => handleIngredientChange(ingredient, event)}></input>
      </li>
    )
  }

  return (
    <>
      <Menu />
  <h2 className="newbread__breadid">BREAD ID: {id}</h2>
      <div className="newbread__container">
        <h1 className="newbread__recipetitle">RECIPE</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <select id="ingredient" name="ingredient" ref={register()}>
            <option disabled>--- FLOURS ---</option>
            {displayFlours()}
            <option disabled>--- LIQUIDS ---</option>
            <option value="liquid_Water">Water</option>
            <option value="liquid_Milk">Milk</option>
            <option>Olive Oil</option>
            <option disabled>--- OTHERS ---</option>
            <option value="starter_Starter">Starter</option>
            <option value="other_Salt">Salt</option>
            <option value="other_Seeds">Seeds</option>
          </select>
          <input id="ingredient-submitbtn" className="squarebutton" type="submit" value="ADD" />
        </form>
        <p className="newbread__hydration">Hydration: {hydration}%</p>
        <div className="newbread__ingredientlist">
          <div className="newbread__flours">
            <h2 className="newbread__ingredient-title">Ingredients</h2>
          </div>
          <div className="newbread__grams">
            <h2 className="newbread__ingredient-title">Grams</h2>
          </div>
          <div className="newbread__ingredient-list">
            <ul>
              {ingredients.map(displayIngredient)}
            </ul>
          </div>
        </div>
        <Link className="createbread__link" to="/submit"><button className="createbread__continue squarebutton">Finalize</button></Link>
      </div>
    </>
  );
}

export default NewBread;
