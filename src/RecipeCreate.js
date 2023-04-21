import React, { useState } from "react";

function RecipeCreate({recipies,addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const defaultForm = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:""
  }
  const [formData,setFormData] = useState(defaultForm)
  function formSubmitHandler(event){
    event.preventDefault()
    console.log("submitted Data is:",formData)
    addRecipe(formData)
    setFormData({...defaultForm})
  }
  function changeHandler(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  return (
    <form name="create" onSubmit={formSubmitHandler}>
      <table>
        <tbody>
          <tr>
            <td key="name">
              <label htmlFor="name">
                <input id="name" type="text" name="name" placeholder="Name" onChange={changeHandler} value={formData.name}></input>
              </label>
            </td>
            <td key="cuisine">
              <label htmlFor="cuisine">
                <input id="cuisine" type="text" name="cuisine" placeholder="Cuisine" onChange={changeHandler} value={formData.cuisine}></input>
              </label>
            </td>
            <td key="photo">
              <label htmlFor="photo">
                <input id="photo" type="url" name="photo" placeholder="URL" onChange={changeHandler} value={formData.photo}></input>
              </label>
            </td>
            <td key="ingredients">
              <label htmlFor="ingredients">
                <textarea id="ingredients" name="ingredients" placeholder="Ingredients" onChange={changeHandler} value={formData.ingredients}></textarea>
              </label>
            </td>
            <td key="preparation">
              <label htmlFor="preparation">
                <textarea id="preparation" name="preparation" placeholder="Preparation" onChange={changeHandler} value={formData.preparation}></textarea>
              </label>
            </td>
            <td>
              <button type="submit" onSubmit={formSubmitHandler}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
