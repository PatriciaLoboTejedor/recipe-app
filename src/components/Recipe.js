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
  console.log(props.recipe);
  return (
    <article className="pokeCard">
      <img className="" src={props.recipe.image} alt={props.recipe.name} />
      <h2 className="">{props.recipe.name}</h2>
      <p className="">{props.recipe.time} min.</p>
      <ul className="">{cuisineTypes()}</ul>
    </article>
  );
}

export default Recipe;
