# Myntra-Clone Documentation

## Overview

**Myntra-Clone** is a web-based project that replicates the core features and user interface of the popular Indian fashion e-commerce platform Myntra. The repository contains multiple versions of the clone, including a modern React+Redux implementation and an older vanilla JavaScript bundle. This clone serves as a learning and demonstration platform for frontend technologies and e-commerce UI/UX patterns.

---

## Project Structure

- **1-pre-built-bundle/old-clone/**  
  A version built with vanilla JavaScript, HTML, and CSS.  
  - `index.html`, `pages/bag.html`: Main pages.
  - `/css/`: Styling files.
  - `/scripts/`: Frontend logic.
  - `/data/items.js`: Sample product data.

- **3-myntra-react-clone/**  
  A modern React application using Redux for state management.  
  - `index.html`: Entry point.
  - `src/`: Source code
    - `main.jsx`: React root, router, and Redux store setup.
    - `routes/`: Route components (e.g., Home, Bag/cart).
    - `store/`: Redux slices for items, cart, and fetch status.
    - `data/items.js`: Sample product catalog.
    - `index.css`: Styling.

---

## Features

- **Product Listing:** Browse a catalog of fashion and lifestyle products, each with image, brand, price, discount, and ratings.
- **Category Navigation:** Navigate by gender (Men, Women, Kids), Home & Living, Beauty, and more.
- **Shopping Bag (Cart):** Add and remove items from the bag. View bag summary and place order.
- **Responsive UI:** Styled to closely match the real Myntra site, including header, navigation bar, banners, and footer.
- **State Management:** Uses Redux for managing cart and product state (React version).
- **Routing:** Page navigation handled via React Router (React version).
- **Static Data:** Product data is provided via a static JS file for demonstration.
- **Footer & Branding:** Replicates Myntra's branding, footer links, and copyright.

---

## How to Run

### React Version (Recommended)
1. Navigate to `3-myntra-react-clone/`.
2. Install dependencies (if a `package.json` is present):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and go to `http://localhost:3000` (or the port shown in your terminal).

### Vanilla JS Version
1. Open `1-pre-built-bundle/old-clone/index.html` directly in your web browser.
2. Explore the functionality using the static product data.

---

## Customization

- **Adding Products:**  
  Edit the `data/items.js` file to modify or add new products.

- **Styling:**  
  Update `index.css` in the relevant folder to change the look and feel.

- **Logic & Features:**  
  Add new Redux slices, React components, or vanilla JS scripts to extend features.

---

## Learning Objectives

- Practice React, Redux, and React Router for scalable frontend apps.
- Understand e-commerce UI patterns: product grid, cart, navigation, search, and checkout.
- Learn state management and modular component design.

---

## License

This project is for educational purposes. It is not affiliated with or endorsed by Myntra.

---

## Credits

Created by Praful Raj.