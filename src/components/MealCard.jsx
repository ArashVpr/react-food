import { Link } from "react-router-dom";

export default function MealCard({ meal }) {
  return (
    <Link to={`/meal/${meal.idMeal}`}>
      <div className="flex justify-center items-center bg-gray-100">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" src={meal.strMealThumb} alt="Meal" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{meal.strMeal}</div>
            <p className="text-gray-700 text-base">
              {meal.strInstructions?.slice(0, 100) ||
                "No instructions provided"}
            </p>
            {meal.strYoutube && (
              <div className="mt-4 text-left">
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-green-500 font-semibold"
                >
                  Including Video Instruction
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
