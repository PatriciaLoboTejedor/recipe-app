function Recipe(props) {
  const cuisineTypes = () => {
    return props.recipe.cuisineType.map((cuisineType, index) => {
      return (
        <li className="" key={index}>
          {cuisineType}
        </li>
      );
    });
  };

  const timeRecipe = props.recipe.time;
  const getTime = () => {
    if (timeRecipe !== 0) {
      return (
        <p className="recipeCard__text-time">
          <i className="fa fa-clock-o"></i> {timeRecipe} min.
        </p>
      );
    } else {
      return (
        <p className="recipeCard__text-time">
          <i className="fa fa-clock-o"></i> -- min.
        </p>
      );
    }
  };

  return (
    <article className="recipeCard">
      <img
        className="recipeCard__img"
        src={props.recipe.image}
        alt={props.recipe.name}
      />
      <h2 className="recipeCard__text-name">{props.recipe.name}</h2>
      {getTime()}
      <ul className="recipeCard__text-type">{cuisineTypes()}</ul>
    </article>
  );
}

export default Recipe;
