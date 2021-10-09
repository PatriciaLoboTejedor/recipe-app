import Recipe from "./Recipe";

function RecipeList(props) {
  console.log(props.recipeList);
  const recipeList = props.recipeList.map((recipe) => (
    <li key={recipe.id}>
      <Recipe recipe={recipe} />
    </li>
  ));
  return <ul className="recipeList">{recipeList}</ul>;
}

export default RecipeList;
