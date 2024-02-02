import React, { useState } from "react";
import "../styles/Contact.css";
import "firebase/auth";
import { signup } from "../firebase/FirebaseProces";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handle = (event) => {
    event.preventDefault();
    signup(email, password, name);
  };

  return (
    <div className="Register">
      <div className="form">
        <h1>Create Your Account</h1>
        <form onSubmit={handle}>
          <label>Ad Soyad</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
