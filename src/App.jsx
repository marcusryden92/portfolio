import "./App.css";
import "./index.css";
import CustomCursor from "./components/CustomCursor";
import { Context } from "./context/Context";

import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Context>
        <MainPage />
        <CustomCursor />
      </Context>
    </>
  );
}

export default App;
