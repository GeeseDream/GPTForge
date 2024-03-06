# GoForge Project Overview

Welcome to the GoForge project, a React-based web application designed to demonstrate the capabilities and potential of using GPTs in various contexts. This project is structured around several key areas that combine to form a comprehensive, interactive, and user-friendly application. This document provides a comprehensive overview of the project's structure and its key components.

## Project Structure and Components

The `src` directory is where the majority of the project's source code resides, including various components, utilities, and styles. Here is a brief overview of the main directories and files within this directory:

### Core Files and Directories

- `App.js`: The main React component, serving as the entry point for the user interface and application logic.
- `App.css`: Stylesheet for the `App` component, providing general styling.
- `gpts.json`: Contains configuration data for various GPT models.
- `index.css`: Global stylesheet for the application, setting up basic styling and fonts.
- `index.js`: The main JS entry point for the application, which initiates the React rendering process.

### Components

The `components` directory contains React components that are used throughout the application. Each component is designed to encapsulate a specific piece of functionality or UI element. Here are some of the key components:

- `Components/AnimatedButton.js`: A button with an animation effect.
- `Components/GPTModelDetails.js`: Displays details about a specific GPT model.
- `Components/GPTModels.js`: Lists available GPT models.
- `Components/ThemeSwitchButton.js`: A button to switch the application theme.

### Context

- `Context/ThemeContext.js`: Manages the theme state across the application using React Context.

### Pages

The `pages` directory contains components that represent different pages within the application, providing specific functionalities or information:

- `Pages/CaseStudies.js`: Showcases various case studies.
- `Pages/Demo.js`: A demo page for interacting with GPT models.
- `Pages/Home.js`: The homepage of the application, providing an overview and access to different parts of the application.

### Additional Files

- `reportWebVitals.js` and `setupTests.js`: Used for monitoring performance and setting up tests, respectively.

This structure overview reveals a React-based application structured around showcasing and interacting with GPT models. The modular structure supports clear separation and reuse of functionality, while context provides cross-component state management capabilities. Pages define the primary interaction points for users.


## Dependencies and Business Logic

### Dependencies
1. **App.js**:
   - Depends on **React** and **react-router-dom** for constructing a single page application's routing.
   - Imports **Home**, **Demo**, and **CaseStudies** page components, defining the app's main routing paths.
   - Uses **ThemeSwitchButton** component to allow theme mode switching (light/dark) by the user.
   - Through **ThemeContext**, manages theme state and passes it down to children components that require it.

2. **Components**:
   - **AnimatedButton** provides an interactive button with animation effects.
   - **ThemeSwitchButton** relies on **ThemeContext** to toggle and get the current theme.
   - **GPTModels** and **GPTModelDetails** components are potentially used by the **Home** page to display information and details about GPT models.

3. **Pages**:
   - **Home**, **Demo**, and **CaseStudies** serve as the main page components routed by **App.js**.

4. **CSS Files**:
   - **App.css**, **index.css**, and **themes.css** provide global styles, theme styles, and specific component styles.

### Business Logic
- **Theme Switching**:
  - The user can toggle between light and dark modes using the **ThemeSwitchButton**, which updates the state in **ThemeContext** affecting the global application of theme styles.

- **Dynamic Content Display**:
  - **GPTModels** component is responsible for asynchronously loading and displaying a list of GPT models, potentially fetching data from `gpts.json`.
  - For each GPT model, detailed information can be displayed, possibly involving the use of the **GPTModelDetails** component.

- **Responsive Design**:
  - Styles in **App.css** and **index.css** ensure compatibility and user experience across different devices with media queries supporting different screen sizes.

- **Animations and Interactivity**:
  - **AnimatedButton** implements interactive animation effects for buttons using `framer-motion`, enhancing user interaction experience.
"""

Please use this document as a guide to update the README file on GitHub.
