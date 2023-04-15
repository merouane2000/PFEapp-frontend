import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./page/Register";
import Dashboard from "./page/admin/Dashboard";
import SignIn from "./page/SignIn";
import MainPage from "./page/admin/CreateProjects/MainPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/admin-dashboard/main-create" element={<MainPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
