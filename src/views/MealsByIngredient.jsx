import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import MealCard from "../components/MealCard";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function MealsByIngredient() {
  const { ingredient } = useParams();
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMealsByIngredient = async () => {
    setError("");
    setLoading(true);
    try {
      const url = `${API_BASE_URL}/filter.php?i=${ingredient}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setError("No meals found for this ingredient.");
      }
    } catch (error) {
      console.error("Error fetching meals:", error);
      setError("Failed to fetch meals. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMealsByIngredient();
  }, [ingredient]);

  return (
    <MainLayout>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Meals with "{ingredient}"</h1>
        {loading && <p className="text-center">Loading...</p>}
        {!loading && error && (
          <p className="text-center text-red-500 py-8">{error}</p>
        )}
        {!loading && meals.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {meals.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default MealsByIngredient;
