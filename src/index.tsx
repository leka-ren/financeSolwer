import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { General } from "./components/General/General";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <General />
  </React.StrictMode>
);
