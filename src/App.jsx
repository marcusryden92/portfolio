import "./App.css";
import "./index.css";
import Cover from "./components/Cover";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="flex">
      <div className="absolute">
        <Cover />
      </div>
      <Menu />
    </div>
  );
}

export default App;
