import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DateProvider } from "../context/DateProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DateProvider>
      <App />
      <ToastContainer />
    </DateProvider>
  </React.StrictMode>
);
