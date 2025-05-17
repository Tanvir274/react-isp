import "./index.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import ActiveClient from "./pages/client/ActiveClient";
import InactiveClient from "./pages/client/InactiveClient";
import ActiveEmployee from "./pages/employee/ActiveEmployee";
import InactiveEmployee from "./pages/employee/InactiveEmployee";
import { FaBars } from "react-icons/fa";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      {/* Fixed Navbar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1020 }}>
        <Navbar />
      </div>

      {/* Hamburger Icon */}
      <button
        className="btn btn-light m-2"
        onClick={toggleSidebar}
        style={{
          position: "fixed",
          top: "55px", // below the navbar
          left: "5px",
          zIndex: 1010,
        }}
      >
        <FaBars size={15} />
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main Content */}
      <div
        className="p-4"
        style={{
          marginTop: "70px", // leave space for navbar
          marginLeft: sidebarOpen && windowWidth >= 768 ? "250px" : "0",
          transition: "margin-left 0.3s",
        }}
      >
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/client/active" element={<ActiveClient />} />
          <Route path="/client/inactive" element={<InactiveClient />} />
          <Route path="/employee/active" element={<ActiveEmployee />} />
          <Route path="/employee/inactive" element={<InactiveEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
