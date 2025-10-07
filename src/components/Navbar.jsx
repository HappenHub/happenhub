import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        background: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.2)",
        padding: "12px 40px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#2c3e50",
            letterSpacing: "0.5px",
            textDecoration: "none",
          }}
        >
          Happen<span style={{ color: "#4a90e2" }}>Hub</span>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={desktopMenuStyle}>
          <NavLink to="/">Login</NavLink>
          <NavLink to="/login">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "transparent",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            color: "#2c3e50",
            display: "none",
          }}
          className="menu-btn"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>


    </nav>
  );
}

// ✅ Reusable link style component
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    style={{
      padding: "8px 18px",
      borderRadius: "8px",
      textDecoration: "none",
      color: "#2c3e50",
      fontWeight: 500,
      fontSize: "16px",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#4a90e2";
      e.target.style.color = "#fff";
      e.target.style.transform = "translateY(-2px)";
      e.target.style.boxShadow = "0 4px 10px rgba(74,144,226,0.3)";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "transparent";
      e.target.style.color = "#2c3e50";
      e.target.style.transform = "translateY(0)";
      e.target.style.boxShadow = "none";
    }}
  >
    {children}
  </Link>
);

// 💻 Styles
const desktopMenuStyle = {
  display: "flex",
  gap: "15px",
};

const mobileMenuStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  marginTop: "10px",
};

export default Navbar;
