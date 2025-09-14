import React, { useEffect } from "react";
import "./Login.css";

const BusLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 300"
    className="bus-logo"
  >
    {/* Bus Body */}
    <rect x="50" y="100" width="500" height="120" rx="20" fill="#3b82f6" stroke="#1e40af" strokeWidth="4" />

    {/* Windows */}
    <rect x="80" y="120" width="60" height="60" rx="8" fill="#fff" stroke="#1e3a8a" strokeWidth="2" />
    <rect x="160" y="120" width="60" height="60" rx="8" fill="#fff" stroke="#1e3a8a" strokeWidth="2" />
    <rect x="240" y="120" width="60" height="60" rx="8" fill="#fff" stroke="#1e3a8a" strokeWidth="2" />
    <rect x="320" y="120" width="60" height="60" rx="8" fill="#fff" stroke="#1e3a8a" strokeWidth="2" />
    <rect x="400" y="120" width="60" height="60" rx="8" fill="#fff" stroke="#1e3a8a" strokeWidth="2" />
    <rect x="480" y="120" width="50" height="60" rx="8" fill="#fff" stroke="#1e3a8a" strokeWidth="2" />

    {/* Tires (static) */}
    <circle cx="140" cy="230" r="30" fill="#1e293b" stroke="#0f172a" strokeWidth="4" />
    <circle cx="460" cy="230" r="30" fill="#1e293b" stroke="#0f172a" strokeWidth="4" />

    {/* Door */}
    <rect x="500" y="100" width="40" height="120" rx="5" fill="#f8fafc" stroke="#1e3a8a" strokeWidth="3" />

    {/* Dust effect */}
    <circle cx="580" cy="220" r="6" fill="#e5e7eb" opacity="0.6">
      <animate attributeName="cx" from="580" to="650" dur="1.5s" repeatCount="indefinite" />
      <animate attributeName="cy" from="220" to="200" dur="1.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="590" cy="230" r="4" fill="#e5e7eb" opacity="0.6">
      <animate attributeName="cx" from="590" to="660" dur="2s" repeatCount="indefinite" />
      <animate attributeName="cy" from="230" to="210" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const Login = ({ onLogin }) => {
  useEffect(() => {
    const card = document.querySelector(".login-card");

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const resetTransform = () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", resetTransform);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", resetTransform);
    };
  }, []);

  return (
    <div className="login-bg">
      <div className="login-card">
        <BusLogo />
        <h2 className="login-title">ADTU Bus Services</h2>
        <label className="login-label">Email</label>
        <input type="text" className="login-input" placeholder="Enter your email" />
        <label className="login-label">Password</label>
        <input type="password" className="login-input" placeholder="Enter your password" />
        <button className="login-button" onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
