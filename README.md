# FlagReact - Country Information App

A React application that displays information about countries from around the world including flags, population data, and more.

## Features

- Browse countries from all continents
- Filter countries by continent (Africa, America, Asia, Europe, Oceania)
- Control the number of displayed countries using a slider
- View country details including flags, names, capitals, and population
- Responsive design

## Technologies Used

- React.js
- React Router for navigation
- Axios for API requests
- SCSS for styling
- REST Countries API for data

## Project Structure

- `components/`: Reusable UI components (Card, Countries, Logo, Navigation)
- `pages/`: Page components (Home, About)
- `styles/`: SCSS styling files
- `App.js`: Main application component with routing

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

Exposes the configuration files and dependencies for customization.

## API

This project uses the [REST Countries API](https://restcountries.com) to fetch country data.

## License

This project is licensed under the MIT License.
