import "./App.css";
import "./index.css";
import CustomCursor from "./components/CustomCursor";
import { PageNavProvider } from "./hooks/usePageNavigation";

import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <PageNavProvider>
        <MainPage />
        {/* <CustomCursor /> */}
      </PageNavProvider>
    </>
  );
}

export default App;
