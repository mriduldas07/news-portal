import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import DetailsNews from "./pages/DetailsNews";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RequireAuth from "./hooks/RequireAuth";

function App() {
  return (
    <div className=" w-[1140px] mx-auto">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:newsId" element={<DetailsNews />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
