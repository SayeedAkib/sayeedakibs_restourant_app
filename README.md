Zomato-Inspired Food Delivery Platform
​A sophisticated, responsive web application built to simulate a modern food delivery experience. This project leverages React.js for high-performance UI rendering and Vite for an optimized development workflow.


​📋 Table of Contents
​Overview
​Key Features
​Technical Stack
​Installation & Setup
​Project Architecture
​Scripts


​🌟 Overview
​This platform provides users with a seamless interface to browse culinary categories, manage a real-time shopping cart, and navigate through a multi-page checkout flow. The application emphasizes modular component design and efficient state management.


​✨ Key Features

​Dynamic Category Filtering: Instantly filter menu items based on food types (e.g., Rolls, Deserts, Salads).

​Persistent Cart Management: Integrated state logic to handle adding, removing, and updating item quantities with live subtotal/total calculations.

​Responsive UI/UX: Optimized for all screen sizes using modern CSS techniques and mobile-first principles.

​Interactive Components: Animated UI elements including search overlays, login modals, and smooth transitions.


​🛠 Technical Stack
​Frontend: React.js (Hooks & Context API)
​Build Tooling: Vite (ESNext)
​Routing: React Router DOM
​Linting: ESLint (Airbnb/Recommended config)
​Styling: CSS3 (Module-based and Global)


​⚙️ Installation & Setup
​Ensure you have Node.js installed on your system.

1. Extract & Navigate:

bash
cd akib

2. Install Dependencies:

bash
npm install

3. Launch Development Server:

bash
npm run dev

4. Production Build (Optional):

bash
npm run build

📁 Project Architecture

src/
├── assets/          # Global media assets (icons, food imagery)
├── components/      # Reusable functional components (Navbar, Footer, ItemCards)
├── context/         # Context API providers for global state management
├── pages/           # Page-level components (Home, Cart, Order)
├── App.jsx          # Root application component and routing logic
└── main.jsx         # Application entry point



📜 Available Scripts

​npm run dev: Starts the Vite development server with Hot Module Replacement (HMR).

​npm run build: Compiles and minifies the application for production deployment.

​npm run lint: Executes the linter to ensure code quality and consistency.

​npm run preview: Locally previews the production build.


​😎 Contributor: 
​Md. Sayed Bin Anwar (Akib)
Find on Facebook : Sayeed Akib
