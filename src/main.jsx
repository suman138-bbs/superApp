import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider } from "./context/categories.context.jsx";
import { SelectedProvider } from "./context/selectedItem.context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SelectedProvider>
        <CategoriesProvider>
          <App />
        </CategoriesProvider>
      </SelectedProvider>
    </BrowserRouter>
  </React.StrictMode>
);
