import React, { useState } from "react";
import "../styles/Contact.css";
import { Login } from "../firebase/FirebaseProces";

function Loginfunk() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handle = (event) => {
    event.preventDefault();
    Login(email, password);
  };

  return (
    <div className="Login">
      <div className="form">
        <h1>Login</h1>
        <form onSubmit={handle}>
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Loginfunk;
