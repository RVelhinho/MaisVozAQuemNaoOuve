import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Introduction } from "./pages/Introduction/Introduction.jsx";
import { App } from "./App.jsx";
import { Communication } from "./pages/Communication/Communication.jsx";
import { BaseURL } from "./config/url.js";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: `${BaseURL}/`,
        element: <Introduction />,
      },
      {
        path: `${BaseURL}/communication`,
        element: <Communication />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
