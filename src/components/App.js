import { useState, useEffect } from "react";

// Imagen importada
import headerImage from "../images/titulo_recetas.png";
// Componentes importados
import RecipeList from "./RecipeList";
// Servicios importados
import apiFetch from "../services/apiFetch";
import ls from "../services/localStorage";

const App = () => {
  // Estado inicial del array principal, o se llena con el local o nos devuelve un array vacío
  const [recipe, setRecipe] = useState(ls.get("recipe") || []);

  // Si el array recipe esta vacío entonces llamo a la función del fetch
  useEffect(() => {
    if (recipe.length === 0) {
      apiFetch().then((recipeData) => {
        setRecipe(recipeData);
      });
    }
  }, [recipe]);

  // Guarda los cambios de estado en localStorage
  useEffect(() => {
    ls.set("recipe", recipe);
  }, [recipe]);

  return (
    <div className="body">
      <header className="header">
        <img src={headerImage} alt="" className="header__logo" />
      </header>
      <main className="main">
        <RecipeList recipeList={recipe} />
      </main>
    </div>
  );
};

export default App;
