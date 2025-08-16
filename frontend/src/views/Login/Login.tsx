import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Button } from "../../components/button";


const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save JWT
      localStorage.setItem("token", data.token);

      // Redirect by role
      if (data.user?.role === "manager") {
        navigate("/manager");
      } else if (data.user?.role === "engineer") {
        navigate("/engineer");
      } else {
        setError("Invalid role");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
         <h1 className="text-3xl font-bold text-blue-500">
    Hello world!
  </h1>
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline</Button>
      </form>
    </div>
  );
};

export default Login;
