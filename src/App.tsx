import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppNav from "./nav-bar/AppNav";
import AppRoutes from "./app-routes/AppRoutes";
import { useSelector } from "react-redux";

function App() {
  const background: string = useSelector(
    (state: any) => state.ThemeBackgroundColor.background
  );

  return (
    <div style={{height:"100%",width:"100%"}}>
      <nav>
        <AppNav />
      </nav>
      <main style={{backgroundColor:background}} className="fullScreen" >
        <AppRoutes />
      </main>
      </div>
  );
}

export default App;
