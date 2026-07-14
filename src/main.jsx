import "@/styles/variables.css";
import "@/styles/globals.css";
import "@/styles/buttons.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);