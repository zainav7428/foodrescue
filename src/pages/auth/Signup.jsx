import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donor");


  function handleSignup(event){
    event.preventDefault();
    if(name==="" || email ==="" || password === ""){
        alert("please fill all fields");
    }
    alert("Account created successfully");
  }
  return (
     <div className="signup-page">

    <div className="signup-card">

      <h1>Create Account</h1>

      <p>Join FoodRescue and make an impact.</p>

      <form onSubmit={handleSignup}>

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <label>Select Role</label>
        <select
        value={role}
        onChange={(e)=>setRole(e.target.value)}>
          <option value="donor">Donor</option>
          <option value="ngo">NGO</option>
          <option value="volunteer">Volunteer</option>
        </select>

        <button type="submit">
          Create Account
        </button>

      </form>

      <p>
        Already have an account?
        <Link to="/login"> Login</Link>
      </p>

    </div>

  </div>
  );
}

export default Signup;