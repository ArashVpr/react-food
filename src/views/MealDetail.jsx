import React, { useState, useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import { useParams } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndicator";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function MealDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMeal = async () => {
    setError("");
    setLoading(true);
    try {
      const url = `${API_BASE_URL}/lookup.php?i=${id}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.meals && data.meals.length > 0) {
        setMeal(data.meals[0]);
      } else {
        setError("Meal not found.");
      }
    } catch (error) {
      console.error("Error fetching meal details:", error);
      setError("Failed to fetch meal details. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchMeal(id);
    }
  }, [id]);

  return (
    <MainLayout>
      {loading && <LoadingIndicator />}
      {error && <p className="text-center text-red-500 py-8">{error}</p>}
      {!loading && !error && meal && (
        <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8">
          <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-full object-contain"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {meal.strMeal}
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                <span className="font-semibold">Category:</span>{" "}
                {meal.strCategory || "N/A"}
              </p>
              <p className="text-gray-600 text-lg mb-6">
                <span className="font-semibold">Area:</span>{" "}
                {meal.strArea || "N/A"}
              </p>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Instructions
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {meal.strInstructions || "No instructions available."}
              </p>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Ingredients
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                {Array.from({ length: 20 }, (_, i) => i + 1)
                  .map((index) => ({
                    ingredient: meal[`strIngredient${index}`],
                    measure: meal[`strMeasure${index}`],
                  }))
                  .filter((item) => item.ingredient)
                  .map((item, idx) => (
                    <li key={idx}>
                      {item.ingredient} - {item.measure}
                    </li>
                  ))}
              </ul>
              {meal.strYoutube && (
                <div className="mt-6 text-center flex justify-center gap-4">
                  <a
                    href={meal.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                  >
                    Watch on YouTube
                  </a>
                  <a
                    href={`https://www.themealdb.com/meal/${meal.idMeal}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                  >
                    View Source
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}
