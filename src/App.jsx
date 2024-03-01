import "./App.css";
import "./index.css";
import Cover from "./components/Cover";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Router } from "react-router-dom";
import { Context } from "./context/Context";
import { useContext } from "react";

function App() {
  return (
    <Context>
      <div className="flex">
        <div className="absolute">
          <Cover />
        </div>
        <Menu />
        {isClickedAbout ? <About /> : ""}
        {isClickedWebD ? <WebD /> : ""}
        {isClickedIndD ? <IndD /> : ""}
      </div>
    </Context>
  );
}

export default App;
