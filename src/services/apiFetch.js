const apiFetch = () => {
  const urlApi =
    "https://api.edamam.com/search?q=&app_id=beec038c&app_key=e84922b8ac8402d4979b1269c8df105d&cuisineType=Asian";
  return fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {
      const recipeData = data.hits.map((recipe) => {
        return {
          name: recipe.recipe.label,
          image: recipe.recipe.image,
          time: recipe.recipe.totalTime,
          cuisineType: recipe.recipe.cuisineType,
        };
      });

      return recipeData;
    });
};

export default apiFetch;

// Ordenar alfabeticamente
/*const orderAllRecipeByName = data.hits.recipe.sort((a, b) =>
        a.label.localeCompare(b.label)
      );*/
