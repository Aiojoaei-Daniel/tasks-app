import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
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
      </BrowserRouter>
    </div>
  );
}

export default App;
