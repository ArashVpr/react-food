import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Card from "../components/Card";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchIngredients = async () => {
    setError(""); // Clear previous errors
    setLoading(true); // Show loading indicator
    try {
      const url = `${API_BASE_URL}/list.php?i=list`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.meals) {
        setIngredients(data.meals);
      } else {
        setError("No ingredients found.");
      }
    } catch (error) {
      console.error("Error fetching ingredients:", error);
      setError("Failed to fetch ingredients. Please try again later.");
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  return (
    <MainLayout>
      <div className="p-4">
        {loading && <p className="text-center">Loading...</p>}
        {!loading && error && (
          <p className="text-center text-red-500 py-8">{error}</p>
        )}
        {!loading && ingredients.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {ingredients.map((ingredient) => (
              <Card key={ingredient.idIngredient}>
                <Link to={`/ingredients/${ingredient.strIngredient}`}>
                  <h2>{ingredient.strIngredient}</h2>
                </Link>
              </Card>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default Ingredients;
