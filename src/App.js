import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import { CssBaseline, Divider } from "@material-ui/core";

import MainPage from "./Components/MainPage/MainPage";
import HistoryPage from "./Components/HistoryPage/HistoryPage";
import Definitions from "./Components/Definitions/Definitions";
import "./App.css";

function App() {
  return (
    <div>
      <CssBaseline></CssBaseline>
      <Routes>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/HistoryPage">
          <HistoryPage />
        </Route>
        <Route path="/search/:userInput">
          <Definitions />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
