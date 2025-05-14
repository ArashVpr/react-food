import SearchForm from "../components/SearchForm";
import LoadingIndicator from "../components/LoadingIndicator";
import MainLayout from "../components/layouts/MainLayout";
import { useState, useEffect } from "react";
import MealCard from "../components/MealCard";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function Home() {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const [heading, setHeading] = useState("Random Meals");
  const [loading, setLoading] = useState(false);

  const fetchRandomMeals = async () => {
    setError(""); // Clear previous errors
    setMeals([]); // Clear previous meals
    setLoading(true); // Show loading indicator
    try {
      const promises = Array.from({ length: 12 }, () =>
        fetch(`${API_BASE_URL}/random.php`).then((res) => res.json())
      );
      const results = await Promise.all(promises);
      const randomMeals = results.map((result) => result.meals[0]);
      setMeals(randomMeals);
    } catch (error) {
      console.error("Error fetching random meals:", error);
      setError("Failed to fetch random meals. Please try again later.");
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  const handleSearch = (query) => {
    setError(""); // Clear previous errors
    setLoading(true); // Show loading indicator
    console.log("Search query:", query);
    if (!query) {
      setHeading("Random Meals");
      fetchRandomMeals(); // Fetch random meals if no query is provided
      return;
    }

    try {
      const url = `${API_BASE_URL}/search.php?s=${query}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.meals) {
            setHeading(`Search Results for "${query}"`);
            setMeals(data.meals);
          } else {
            setMeals([]);
            setError("No meals found for the given search query.");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError("Failed to fetch meals. Please try again later.");
        })
        .finally(() => {
          setLoading(false); // Hide loading indicator
        });
    } catch (error) {
      console.error("Error fetching meals:", error);
      setError("An unexpected error occurred. Please try again later.");
      setLoading(false); // Hide loading indicator
    }
  };

  useEffect(() => {
    fetchRandomMeals();
  }, []);
  return (
    <MainLayout>
      <div className="flex justify-center p-8">
        <SearchForm
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </div>
      {loading && <LoadingIndicator />}
      {!loading && error && (
        <p className="text-center text-red-500 py-8">{error}</p>
      )}
      {!loading && meals.length === 0 && !error && (
        <p className="text-center py-8">No meals found</p>
      )}
      {!loading && (
        <div className="px-8">
          <h1 className="text-3xl font-bold mb-4">{heading}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {meals.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        </div>
      )}
    </MainLayout>
  );
}

export default Home;
