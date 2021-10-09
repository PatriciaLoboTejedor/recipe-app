import Recipe from "./Recipe";

function RecipeList(props) {
  const recipeList = props.recipeList.map((recipe, index) => (
    <li key={index}>
      <Recipe recipe={recipe} />
    </li>
  ));
  return (
    <section>
      <ul className="main__list">{recipeList}</ul>
    </section>
  );
}

export default RecipeList;
