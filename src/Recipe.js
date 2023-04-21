import React from "react";

function Recipe({recipe, deleteRecipe}){
    const {name,cuisine,photo,ingredients,preparation} = recipe
    return (
        <tr> 
        <td className="options"><p>{name}</p></td>
        <td className="options"><p>{cuisine}</p></td>
        <td className="options"><img src={photo} alt={cuisine}/></td>
        <td className="content_td"><p>{ingredients}</p></td>
        <td className="content_td"><p>{preparation}</p></td>
        <td className="options"><button name="delete" onClick={() => deleteRecipe(recipe)}>Delete</button></td>
        
        </tr>
    )
}

export default Recipe