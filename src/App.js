import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import {
  Tasks,
  Activity,
  Logs,
  Overview,
  ProjectTree,
  Quotations,
  Reports,
  Transactions,
} from "./containers";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/project-tree" element={<ProjectTree />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/quotations" element={<Quotations />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
