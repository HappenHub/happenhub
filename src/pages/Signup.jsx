import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const { type } = useParams(); // "user" or "organiser"

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signup logic here");
    if (type === "user") navigate("/login/user");
    else navigate("/login/organiser");
  };

  return (
    <div className="form-card">
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        {type === "user" ? "User Signup" : "Organiser Signup"}
      </h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="First Name *" required className="input-field" />
        <input type="text" placeholder="Last Name" className="input-field" />
        <input type="number" placeholder="Age" className="input-field" />
        <input type="tel" placeholder="Phone Number" className="input-field" />
        <input type="email" placeholder="Email (optional)" className="input-field" />
        <input type="password" placeholder="Create Password" className="input-field" />
        <input type="password" placeholder="Confirm Password" className="input-field" />
        <button type="submit" className="btn-primary">Create Account</button>
      </form>
    </div>
  );
}

export default Signup;
