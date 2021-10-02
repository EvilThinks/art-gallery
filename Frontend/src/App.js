import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import "./media/scss/bootstrap.scss";
import "./media/scss/style.scss";
import "./media/scss/responsive.scss";


function App() {
  return (
    <BrowserRouter>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
