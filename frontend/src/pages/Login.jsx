import React, { useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.token);
      navigate("/admin"); 
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-500">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
