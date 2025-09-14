import React, { useState, useEffect } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes tire-rotate {
        0% { transform: rotate(0deg);}
        100% { transform: rotate(360deg);}
      }
      @keyframes dust-float-right {
        0% { opacity: 1; transform: translate(0, 0) scale(1);}
        50% { opacity: 0.5; transform: translate(15px, -20px) scale(0.8);}
        100% { opacity: 0; transform: translate(30px, -40px) scale(0.5);}
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(2deg); }
      }
      @keyframes glow-pulse {
        0%, 100% { filter: drop-shadow(0 0 15px rgba(44, 99, 246, 0.3)); }
        50% { filter: drop-shadow(0 0 25px rgba(44, 99, 246, 0.5)); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const bg = document.querySelector(".login-bg");
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      bg.style.setProperty("--x", `${(clientX / innerWidth) * 100}%`);
      bg.style.setProperty("--y", `${(clientY / innerHeight) * 100}%`);
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
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
    <svg
      className="bus-logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 370 120"
      fill="none"
    >
      <g transform="scale(-1,1) translate(-370,0)">
        <rect
          x="30"
          y="40"
          rx="25"
          ry="25"
          width="300"
          height="50"
          fill="url(#busGradient)"
          stroke="#2C63F6"
          strokeWidth="3"
        />
        <path
          d="M40 90 Q70 50 130 50 L330 50"
          stroke="#5B4CF0"
          strokeWidth="3"
          fill="url(#busBodyGradient)"
        />
        <path
          d="M33 64 Q58 36 145 30 Q265 18 330 50"
          stroke="#5B4CF0"
          strokeWidth="3"
          fill="none"
        />
        <rect
          x="160"
          y="58"
          width="32"
          height="32"
          rx="4"
          fill="#e0f2fe"
          stroke="#2C63F6"
          strokeWidth="2"
        />
        <rect
          x="75"
          y="47"
          width="230"
          height="22"
          rx="8"
          fill="url(#windowGradient)"
          opacity="0.9"
        />
        <rect x="85" y="51" width="28" height="6" rx="2" fill="#dbeafe" opacity="0.7" />
        <rect x="125" y="51" width="28" height="6" rx="2" fill="#dbeafe" opacity="0.7" />
        <rect x="165" y="51" width="28" height="6" rx="2" fill="#dbeafe" opacity="0.7" />
        <rect x="205" y="51" width="28" height="6" rx="2" fill="#dbeafe" opacity="0.7" />
        <rect x="245" y="51" width="48" height="6" rx="2" fill="#dbeafe" opacity="0.7" />

        <rect x="8" y="104" width="335" height="4" rx="2" fill="#5B4CF0" opacity="0.3" />

        <g className="tire" style={{ animation: "tire-rotate 1.6s linear infinite", transformOrigin: "70px 98px" }}>
          <circle cx="70" cy="98" r="15" fill="#1e293b" stroke="#0f172a" strokeWidth="4" />
          <circle cx="70" cy="98" r="7" fill="#475569" />
        </g>
        <g className="tire" style={{ animation: "tire-rotate 1.6s linear infinite", transformOrigin: "140px 98px" }}>
          <circle cx="140" cy="98" r="15" fill="#1e293b" stroke="#0f172a" strokeWidth="4" />
          <circle cx="140" cy="98" r="7" fill="#475569" />
        </g>
        <g className="tire" style={{ animation: "tire-rotate 1.6s linear infinite", transformOrigin: "260px 98px" }}>
          <circle cx="260" cy="98" r="15" fill="#1e293b" stroke="#0f172a" strokeWidth="4" />
          <circle cx="260" cy="98" r="7" fill="#475569" />
        </g>

        {/* Darker dust particles */}
        <ellipse cx="80" cy="112" rx="12" ry="8" fill="rgba(30, 41, 59, 0.8)" style={{ animation: "dust-float-right 3s ease-out infinite" }} />
        <ellipse cx="155" cy="115" rx="10" ry="6" fill="rgba(51, 65, 85, 0.7)" style={{ animation: "dust-float-right 3s 1.2s ease-out infinite" }} />
        <ellipse cx="275" cy="112" rx="13" ry="7" fill="rgba(15, 23, 42, 0.9)" style={{ animation: "dust-float-right 3s 1.8s ease-out infinite" }} />
      </g>
      
      <defs>
        <linearGradient id="busGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2C63F6" />
          <stop offset="100%" stopColor="#8449F7" />
        </linearGradient>
        <linearGradient id="busBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5B4CF0" />
          <stop offset="100%" stopColor="#7B3FE8" />
        </linearGradient>
        <linearGradient id="windowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2C63F6" />
          <stop offset="100%" stopColor="#5B4CF0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default Login;
