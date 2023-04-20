import { Route, Routes } from "react-router-dom";
import "./App.css";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import DetailsNews from "./pages/DetailsNews";

function App() {
  return (
    <div className=" w-[1140px] mx-auto">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:newsId" element={<DetailsNews />} />
      </Routes>
    </div>
  );
}

export default App;
