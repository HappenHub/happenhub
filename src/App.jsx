import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LoginUser from "./pages/LoginUser";
import LoginOrganiser from "./pages/LoginOrganiser";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to user login */}
        <Route path="/" element={<Navigate to="/login/user" />} />

        {/* User Login */}
        <Route path="/login/user" element={<LoginUser />} />

        {/* Organiser Login */}
        <Route path="/login/organiser" element={<LoginOrganiser />} />

        {/* Signup for User or Organiser */}
        <Route path="/signup/:type" element={<Signup />} />

        {/* Fallback route for unknown URLs */}
        <Route path="*" element={<h2 style={{textAlign: "center", marginTop: "2rem"}}>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
