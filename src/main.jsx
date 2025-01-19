import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import "./css/state-weather-page.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
