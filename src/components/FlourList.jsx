import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Menu from "./MenuBar";
import "./FlourList.css";
import ApiHandler from '../util/ApiHandler'

function FlourList() {
  const [flourList, setFlourList] = useState([]);
  const { register, errors, handleSubmit } = useForm();

  useEffect(() => { 
    let savedFlours = ApiHandler.getFlours();
    setFlourList(savedFlours);
  }, []);

  function deleteFlour(flourToDelete) {
    ApiHandler.deleteFlour(flourToDelete);
    setFlourList(flourList.filter((flour) => flour !== flourToDelete))
  }

  function createFlourList() {
    let floursToDisplay = [];

    flourList.forEach((flour) => {
      floursToDisplay.push(
        <li key={flour.name + flourList.indexOf(flour)}>
          <h3>{flour.name}</h3>
          <button className="newbread__one-ingredient-row__deletebtn" onClick={() => deleteFlour(flour)}>X</button>
        </li>
      );
    });

    return <ul>{floursToDisplay}</ul>;
  }

  const onSubmit = (newFlour, e) => {
    console.log(newFlour);
    ApiHandler.addFlour(newFlour);
    e.target.reset();
    setFlourList([...flourList].concat([newFlour]))
  };

  return (
    <>
      <Menu />
      <div className="flourlist__wrapper">
        <h1>Edit saved flours</h1>
        <form id="flourlist__form" onSubmit={handleSubmit(onSubmit)}>
            {errors.name && "Please enter a unique name."}
            <label htmlFor="flourname">Name of flour: </label>
            <input name="name" id="name" type="text" placeholder="Enter name..." ref={register({ required: true, validate: flourToValidate => !flourList.some((flour) => flour.name === flourToValidate) })} />
            <input type="submit" className="addflour-btn" value="Add"/>
        </form>
        <h2>Current list</h2>
        <div className="flourlist__listcontainer">{createFlourList()}</div>
      </div>
    </>
  );
}

export default FlourList;
