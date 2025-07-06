import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./projects/reacting-to-input-with-state/add-and-remove-a-css-class/App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
