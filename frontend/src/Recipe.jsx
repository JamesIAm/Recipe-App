import React from "react";
import recipe from "./recipes.json";

const Recipe = () => {
  return (
    <ul>
      {recipe.map((ingredient, key) => (
        <li key={key}>
          {ingredient.name}, {ingredient.amount}
        </li>
      ))}
    </ul>
  );
};

export default Recipe;
