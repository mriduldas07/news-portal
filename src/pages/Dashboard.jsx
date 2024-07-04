import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import Navbar from "../components/Navbar";
import { fetchNewsForReader } from "../features/newsForReaders/newsForReadersSlice";
import { auth } from "../firebase.config";

export default function Dashboard() {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewsForReader());
  }, []);
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-3">
          <DashboardSidebar />
        </div>
        <div className="col-span-9">
          <h1 className="font-bold text-3xl">Overview</h1>

          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
