import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Get the root DOM element
const rootElement = document.getElementById("root");

if (rootElement) {
  // Create a React root and render the App inside StrictMode
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  // Optionally handle the case where the root element is missing
  console.error('Root element with id "root" not found.');
}
