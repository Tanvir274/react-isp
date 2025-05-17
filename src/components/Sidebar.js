import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUsers, FaUserCheck, FaUserTimes, FaUserTie, FaChevronDown,} from "react-icons/fa";
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");

  const toggleMenu = (menu) => {
    setActiveMenu(prev => (prev === menu ? "" : menu));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`sidebar ${isOpen ? "show" : "hide"} p-3`}>
      <div className="d-flex align-items-center justify-content-center mt-4 mb-3">
        <img src="" alt="Logo" style={{ width: '30px', height: '30px' }} />
      </div>

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/dashboard" className={`nav-link ${isActive("/dashboard") ? "active" : ""}`}>
            <FaHome className="me-2 ml-4" /> Dashboard
          </Link>
        </li>

        <li>
          <div
            className="nav-link d-flex justify-content-between align-items-center"
            onClick={() => toggleMenu("client")}
          >
            <span><FaUsers className="me-2" /> Client</span>
            <FaChevronDown
              size={12}
              className={`chevron ${activeMenu === "client" ? "rotate" : ""}`}
            />
          </div>
          <div className={`submenu ${activeMenu === "client" ? "show" : ""}`}>
            <Link to="/client/active" className={`nav-link ${isActive("/client/active") ? "active" : ""}`}>
              <FaUserCheck className="me-2" /> Active Client
            </Link>
            <Link to="/client/inactive" className={`nav-link ${isActive("/client/inactive") ? "active" : ""}`}>
              <FaUserTimes className="me-2" /> Inactive Client
            </Link>
          </div>
        </li>

        <li>
          <div
            className="nav-link d-flex justify-content-between align-items-center"
            onClick={() => toggleMenu("employee")}
          >
            <span><FaUserTie className="me-2" /> Employee</span>
            <FaChevronDown
              size={12}
              className={`chevron ${activeMenu === "employee" ? "rotate" : ""}`}
            />
          </div>
          <div className={`submenu ${activeMenu === "employee" ? "show" : ""}`}>
            <Link to="/employee/active" className={`nav-link ${isActive("/employee/active") ? "active" : ""}`}>
              <FaUserCheck className="me-2" /> Active
            </Link>
            <Link to="/employee/inactive" className={`nav-link ${isActive("/employee/inactive") ? "active" : ""}`}>
              <FaUserTimes className="me-2" /> Inactive
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
