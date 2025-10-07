import React from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginOrganiser() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Organiser login logic here");
  };

  return (
    <div className="form-card">
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Organiser Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username / Email" required className="input-field" />
        <input type="password" placeholder="Password" required className="input-field" />
        <Link to="#" className="text-link">Forgot Password?</Link>
        <button type="submit" className="btn-primary">Login</button>
      </form>
      <button className="btn-google">Sign in with Google</button>
      <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
        Don't have an account? <Link to="/signup/organiser" className="text-link">Create Account</Link>
      </p>
      <button className="btn-switch" onClick={() => navigate("/login/user")}>
        Are you a User? Login here
      </button>
    </div>
  );
}

export default LoginOrganiser;
