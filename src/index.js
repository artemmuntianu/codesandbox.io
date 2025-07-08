import { StrictMode } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./projects/reacting-to-input-with-state/add-and-remove-a-css-class/App.js";

const root = createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ul>
      <li>
        <Link to="/reacting-to-input-with-state">
          /reacting-to-input-with-state/add-and-remove-a-css-class
        </Link>
      </li>
      <li></li>
    </ul> */}

    {/* <BrowserRouter>
      <Routes>
        <Route path="reacting-to-input-with-state" element={<App />} />
      </Routes>
    </BrowserRouter> */}
  </StrictMode>
);
