import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "green",
        color: "white",
        padding: "10px 20px",
        zIndex: 1020,
        height: "60px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0, fontSize: "20px" }}>Internet ERP System</h2>
    </nav>
  );
};

export default Navbar;
