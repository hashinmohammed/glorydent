import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import Root from "./Root.jsx";

const container = document.getElementById("root");

// Production HTML is pre-rendered at build time (scripts/prerender.js); in dev it is empty.
if (container.firstElementChild) {
  hydrateRoot(container, <Root />);
} else {
  createRoot(container).render(<Root />);
}
