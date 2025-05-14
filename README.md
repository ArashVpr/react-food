# MealFinder App Documentation

## Overview

**MealFinder** is a modern, React-based web application designed to help users discover meals based on various criteria, such as name, ingredients, and meal details. Leveraging the power of **TheMealDB API**, the app provides users with an intuitive interface to explore a vast collection of meals and their components. The application is built using **Vite**, **React Router**, and **TailwindCSS**, ensuring fast performance, scalability, and a responsive design.

## Features

* **Meal Search**: Search for meals by name using an intuitive search bar.
* **Random Meals**: Display a collection of random meals on the homepage for inspiration.
* **Meal Details**: View detailed information about meals, including ingredients, preparation instructions, and external resources (e.g., YouTube videos or source pages).
* **Ingredient Exploration**: Browse a list of ingredients and view meals that include specific ingredients.
* **Responsive Design**: The app is fully responsive, ensuring an optimal experience across all device types.

## Project Structure

The project is organized in a modular structure, ensuring ease of scalability and maintainability. The key sections of the project include **components**, **views**, and **layouts**.

## Installation

### Prerequisites

* **Node.js** (v16 or higher)
* **npm** or **yarn**

### Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies**
   Navigate to the project directory and install the required dependencies using either npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory of the project and include the following:

   ```
   VITE_API_URL=<your-api-base-url>
   ```

4. **Start the Development Server**
   Run the following command to start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open the Application**
   Access the app in your browser at `http://localhost:5173`.

### Available Scripts

* `npm run dev` / `yarn dev`: Starts the development server.
* `npm run build` / `yarn build`: Builds the app for production.
* `npm run preview` / `yarn preview`: Previews the production build.
* `npm run lint` / `yarn lint`: Runs ESLint to check for code issues.

## Components

### Layout Components

* **MainLayout.jsx**: A wrapper component that includes the header and footer, providing a consistent layout for all pages.
* **Header.jsx**: Contains the navigation bar with links to the homepage and the ingredients page.
* **Footer.jsx**: Displays footer content with copyright and additional information.

### Reusable Components

* **MealCard.jsx**: Displays a meal's thumbnail, name, and a brief description.
* **Card.jsx**: A generic card component used for displaying any content.
* **SearchForm.jsx**: A component that allows users to search for meals by name.
* **LoadingIndicator.jsx**: A spinner to indicate loading states.

### Views

* **Home.jsx**:

  * Displays random meals by default.
  * Allows users to search for meals by name.
  * Shows results or error messages if no meals are found.

 ![homepage](https://github.com/user-attachments/assets/bf16c7ef-cf49-43dc-9b07-492f58598504)


 ![search](https://github.com/user-attachments/assets/da634377-eeb0-43a6-ba95-bf0bf352162a)



* **Ingredients.jsx**:

  * Fetches and displays a list of ingredients.
  * Links each ingredient to a page showing meals that use it.

 ![image](https://github.com/user-attachments/assets/4db4b6e5-cbdc-4d25-94ae-9a16b96bf97f)


* **MealsByIngredient.jsx**:

  * Displays meals filtered by a specific ingredient.
  * Fetches and displays meals based on the selected ingredient.

 ![mealsbyingredient](https://github.com/user-attachments/assets/65267c3c-58b0-4889-8a5c-5ae723ebe970)


* **MealDetail.jsx**:

  * Shows detailed information about a specific meal, including:

    * Name, category, and area.
    * Ingredients and preparation instructions.
    * Links to YouTube videos and external source pages.

   ![mealdetail](https://github.com/user-attachments/assets/5eeb3733-4d65-4827-a78d-dd27f11c6617)


## API Integration

The app interacts with **TheMealDB API** using the following endpoints:

* **Random Meals**: `/random.php`
* **Search Meals by Name**: `/search.php?s=<query>`
* **Filter Meals by Ingredient**: `/filter.php?i=<ingredient>`
* **Meal Details by ID**: `/lookup.php?i=<id>`
* **List Ingredients**: `/list.php?i=list`

## Styling

The app uses **TailwindCSS** for styling, allowing for a flexible and customizable design. Global styles are defined in `index.css` and `App.css`.

## Environment Variables

The application relies on a `.env` file for the configuration of sensitive information, such as the API base URL.

Example `.env` file:

```
VITE_API_URL=https://www.themealdb.com/api/json/v1/1
```

## Known Issues

* **Error Handling**: Some error messages are generic and could be improved for a better user experience.
* **Loading States**: The loading indicators could be enhanced with animations or progress bars for smoother user interaction.

## Future Enhancements

* **User Authentication**: Implement user authentication to allow users to save their favorite meals.
* **Pagination**: Add pagination for large datasets to improve performance.
* **Accessibility Improvements**: Enhance the app's accessibility by adding ARIA roles and improving keyboard navigation.
* **Testing**: Write unit tests for components and views to ensure the app functions correctly.

## License

This project is licensed under the **MIT License**. For more details, please refer to the LICENSE file.

## Credits

* **API**: TheMealDB
* **Framework**: React
* **Build Tool**: Vite
* **Styling**: TailwindCSS

