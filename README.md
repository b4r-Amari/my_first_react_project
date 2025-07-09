# MovieLand - My First React App

MovieLand is a simple movie search application built with [React](https://react.dev/). It allows users to search for movies by title and displays results fetched from the [OMDb API](https://www.omdbapi.com/).

## Features

- Search for movies by title
- View movie posters, titles, years, and types
- Responsive and modern UI

## How It Works

1. **React Setup:**  
   The project was bootstrapped using [Create React App](https://github.com/facebook/create-react-app), which provides a modern build setup with no configuration.

2. **Movie Search:**  
   - The main logic is in [`App.js`](src/App.js), which manages the state for the search term and the list of movies.
   - When the app loads, it fetches and displays movies with the default search term "Batman".
   - Users can type a movie title in the search box and click the search icon to fetch results from the OMDb API.
   - Each movie is displayed using the [`MovieCard`](src/MovieCard.jsx) component.

3. **Styling:**  
   - The app uses custom CSS in [`App.css`](src/App.css) for layout and styling.
   - The UI is responsive and adapts to different screen sizes.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed on your machine.

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/react_practice.git
   cd react_practice
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

## Project Structure

- [`src/App.js`](src/App.js): Main application logic and state management.
- [`src/MovieCard.jsx`](src/MovieCard.jsx): Component for displaying individual movie details.
- [`src/App.css`](src/App.css): Styling for the app.
- [`src/index.js`](src/index.js): Entry point for the React app.

## How We Built It

- Used functional components and React hooks (`useState`, `useEffect`) for state and lifecycle management.
- Fetched movie data from the OMDb API using JavaScript's `fetch` API.
- Managed user input and displayed search results dynamically.
- Applied custom CSS for a clean and modern look.

## Customization

- You can change the default search term in [`App.js`](src/App.js) by editing the `useEffect` call.
- To use your own OMDb API key, replace the `apikey` value in the `API_UR` variable in [`App.js`](src/App.js).

## License

This project is for learning and personal use.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
