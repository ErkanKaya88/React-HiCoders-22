import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Teachers from "./components/Teachers";
import Students from "./components/Students";
import Home from "./components/Home";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PersonContextProvider from "./contexts/PersonContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/teacher",
    element: (
      <PersonContextProvider>
        <Teachers />
      </PersonContextProvider>
    ),
  },
  {
    path: "/student",
    element: (
      <PersonContextProvider>
        <Students />
      </PersonContextProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
