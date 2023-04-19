import "./App.css";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className=" w-[1140px] mx-auto">
      <Topbar />
      <Home />
    </div>
  );
}

export default App;
