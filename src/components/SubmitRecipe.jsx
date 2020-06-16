import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Menu from "./MenuBar";
import "./SubmitRecipe.css";
import QueryUtil from "../util/QueryUtil";
import { useForm } from "react-hook-form";
import ApiHandler from "../util/ApiHandler";

function SubmitRecipe(props) {
  let recipeId = QueryUtil.getQueryParameter("recipeid", props.location.search);
  if (!recipeId) {
    recipeId = "---";
  }

  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!isNaN(recipeId)) {
      let recipe = ApiHandler.getRecipe(Number(recipeId));
      console.log("recipe", recipe);
      if (recipe) {
        setNotes(recipe.notes);
      }
    }
  }, [recipeId]);

  const onSubmit = (data) => {
    console.log("submit", data);
    updateRecipe(data.rating, data.notes, true);
    history.push("/recipebank");
  };

  const onStore = (data) => {
    console.log("store", data);
    updateRecipe(data.rating, data.notes, false);
    history.push("/started");
  };

  const updateRecipe = (rating, notes, finalized) => {
    if (!isNaN(recipeId)) {
      ApiHandler.updateRecipe(Number(recipeId), rating, notes, finalized);
    }
  };

  return (
    <>
      <Menu />
      <h2 className="newbread__breadid">RECIPE ID: {recipeId}</h2>
      <form
        className="submitbread__container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="submitbread__title">SUBMIT RECIPE</h1>
        <select id="rating" name="rating" ref={register()}>
          <option value="" selected="selected" disabled>
            -- Rating --
          </option>
          <option value="1">1 - It went in the trash...</option>
          <option value="2">2 - Not my best work.</option>
          <option value="3">3 - I'd eat it again.</option>
          <option value="4">4 - Pretty good!</option>
          <option value="5">5 - Fantastic!!</option>
        </select>
        <p className="submitbread__ratetext">Rate the result of this recipe.</p>
        <h1 className="submitbread__title">NOTES</h1>
        <textarea
          id="notes"
          name="notes"
          ref={register()}
          placeholder="..."
          defaultValue={notes}
        ></textarea>
        <button
          className="submitbread__continue squarebutton"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
        <button
          className="createbread__store squarebutton"
          onClick={handleSubmit(onStore)}
        >
          Store
        </button>
      </form>
    </>
  );
}

export default SubmitRecipe;
