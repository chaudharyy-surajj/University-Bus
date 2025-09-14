import React, { useState, useEffect } from "react";
import "./Login.css";
import { useAuth } from "../auth/AuthContext.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
async function handleReset() {
  const auth = getAuth();
  await sendPasswordResetEmail(auth, email);
}


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const { login, isAuthenticated, role } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || `/${role || "student"}`;

  // keep your animation <style> injection
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes tire-rotate { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }
      @keyframes dust-float-right { 0% { opacity:1; transform: translate(0,0) scale(1);} 50% { opacity:.5; transform: translate(15px,-20px) scale(.8);} 100% { opacity:0; transform: translate(30px,-40px) scale(.5);} }
      @keyframes float { 0%,100% { transform: translateY(0) rotate(0);} 50% { transform: translateY(-10px) rotate(2deg);} }
      @keyframes glow-pulse { 0%,100% { filter: drop-shadow(0 0 15px rgba(44,99,246,.3)); } 50% { filter: drop-shadow(0 0 25px rgba(44,99,246,.5)); } }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // keep your mouse parallax effect
  useEffect(() => {
    const bg = document.querySelector(".login-bg");
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      bg?.style.setProperty("--x", `${(clientX / innerWidth) * 100}%`);
      bg?.style.setProperty("--y", `${(clientY / innerHeight) * 100}%`);
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // redirect away if already logged in
  useEffect(() => {
    if (isAuthenticated) navigate(from, { replace: true });
  }, [isAuthenticated, from, navigate]); // programmatic redirect per v6 [17]

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      // Firebase email/password sign-in via context
      await login(email, password); // uses signInWithEmailAndPassword under the hood [1]
      if (onLogin) onLogin(); // optional legacy callback, safe to keep [13]
      // navigate happens in the effect when isAuthenticated flips true [17]
    } catch (e2) {
      setErr(e2?.message || "Sign-in failed");
    }
  };

  return (
    <div className="login-bg">
      <div className="cosmic-bg"></div>
      <form className="login-card" onSubmit={handleSubmit}>
        <BusLogo />
        <div className="title-container">
          <h1 className="login-title">
            <span className="title-main">ADTU</span>
            <span className="title-sub">Bus Services</span>
          </h1>
          <div className="title-underline"></div>
        </div>
        <p className="login-subtitle">Smart Transportation • Seamless Journey</p>

        {err ? <p style={{ color: "#ffb4b4", marginBottom: 12 }}>{err}</p> : null}

        <div className="input-group">
          <label className="login-label">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
        </div>

        <div className="input-group">
          <label className="login-label">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>

        <button type="submit" className="login-button">
          <span className="button-text">Sign In</span>
          <div className="button-glow"></div>
        </button>
      </form>
    </div>
  );
};

const BusLogo = () => (
  <div className="logo-container">
    {/* ... keep your existing SVG exactly as-is ... */}
  </div>
);

export default Login;
