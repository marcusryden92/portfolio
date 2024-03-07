import "./App.css";
import "./index.css";
import CustomCursor from "./components/CustomCursor";
import { Context } from "./context/NavigationContextProvider";

import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <NavigationContextProvider>
        <MainPage />
        <CustomCursor />
      </NavigationContextProvider>
    </>
  );
}

export default App;
