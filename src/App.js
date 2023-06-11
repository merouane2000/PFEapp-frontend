import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./page/Register";
import Dashboard from "./page/admin/Dashboard";
import SignIn from "./page/SignIn";
import MainCreateProjectPage from "./page/admin/CreateProjects/MainCreateProjectPage";
import AppContextProvider from "./Contexts/AppContext";
import MainSearchProjectsPage from "./page/admin/SearchProjects/MainSearchProjectsPage";
import SourceModelReprisentation from "./page/admin/SearchProjects/SourceModelReprisentation";
import TargetModelReprisentation from "./page/admin/SearchProjects/TargetModelReprisentation";
import MainCollaborateProjectsPage from "./page/admin/CollaborateProjects/MainCollaborateProjectsPage";
import EditTargetRep from "./page/admin/CollaborateProjects/EditTargetRep";
import EditSourceRep from "./page/admin/CollaborateProjects/EditSourceRep";
import EditPage from "./page/admin/CollaborateProjects/EditPage";
import CodingSource from "./page/admin/SearchProjects/CodingSource";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route
              path="/admin-dashboard/main-search"
              element={<MainSearchProjectsPage />}
            />
            <Route
              path="/admin-dashboard/main-search/target-reprisontation"
              element={<TargetModelReprisentation />}
            />
            <Route
              path="/admin-dashboard/main-search/source-reprisontation"
              element={<SourceModelReprisentation />}
            />
            <Route
              path="/admin-dashboard/main-create"
              element={<MainCreateProjectPage />}
            />
            <Route
              path="/admin-dashboard/main-collaborate"
              element={<MainCollaborateProjectsPage/>}
            />
            <Route
              path="/admin-dashboard/main-collaborate/edit-source-reprisontation"
              element={<EditSourceRep/>}
            />
            <Route
              path="/admin-dashboard/main-collaborate/edit-target-reprisontation"
              element={<EditTargetRep/>}
            />
            <Route
              path="/admin-dashboard/main-collaborate/edit-page"
              element={<EditPage/>}
            />
            <Route
              path="/admin-dashboard/main-Search/coding-page"
              element={<CodingSource/>}
            />
          </Routes>
        </Router>
      </div>
    </AppContextProvider>
  );
}

export default App;
