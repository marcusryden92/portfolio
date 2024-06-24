import "./App.css";
import "./index.css";
import CustomCursor from "./components/CustomCursor";
import { PageNavProvider } from "./hooks/usePageNavigation";

import { ContextWebD } from "./context/ContextWebD";
import { ContextIndD } from "./context/ContextIndD";
import { ContextAbout } from "./context/ContextAbout";
import { ContextProjectPage } from "./context/ContextProjectPage";

import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <PageNavProvider>
        <ContextIndD>
          <ContextWebD>
            <ContextAbout>
              <ContextProjectPage>
                <MainPage />
                {/* <CustomCursor /> */}{" "}
              </ContextProjectPage>
            </ContextAbout>
          </ContextWebD>
        </ContextIndD>
      </PageNavProvider>
    </>
  );
}

export default App;
