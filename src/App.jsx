import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddNews from "./components/AddNews";
import MyNews from "./components/MyNews";
import Profile from "./components/Profile";
import Topbar from "./components/Topbar";
import UpdateModal from "./components/UpdateModal";
import RequireAuth from "./hooks/RequireAuth";
import Career from "./pages/Career";
import Dashboard from "./pages/Dashboard";
import DetailsNews from "./pages/DetailsNews";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="mx-auto px-0 lg:px-10 max-w-7xl">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/news/:newsId"
          element={
            <RequireAuth>
              <DetailsNews />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/career"
          element={
            <RequireAuth>
              <Career />
            </RequireAuth>
          }
        />
        <Route
          path="/update/:id"
          element={
            <RequireAuth>
              <UpdateModal />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyNews />} />
          <Route path="myProfile" element={<Profile />} />
          <Route path="addNews" element={<AddNews />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
