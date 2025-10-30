import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.js'
import Properties from './Properties.js'
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App/>
      <Properties></Properties>
      <Footer/>
  </React.StrictMode>
);
