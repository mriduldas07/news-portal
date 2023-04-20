import React from "react";
import Latest from "../components/Latest";
import Navbar from "../components/Navbar";
import NewsContainer from "../components/NewsContainer";

export default function Home() {
  return (
    <div>
      <Latest />
      <Navbar />
      <NewsContainer />
    </div>
  );
}
