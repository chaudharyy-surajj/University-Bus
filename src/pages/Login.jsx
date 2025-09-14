import React, { useState, useEffect } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Cursor-following gradient
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-bg">
      <form className="login-card" onSubmit={handleSubmit}>
        <BusLogo />
        <h2 className="login-title">ADTU Bus Services</h2>

        <label className="login-label">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
        />

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

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

// ORIGINAL BUS LOGO (your version)
// ORIGINAL BUS LOGO (tires fixed - no rotation)
const BusLogo = () => (
  <svg
    style={{ width: "220px", margin: "auto", filter: "drop-shadow(0 0 4px rgba(0,0,0,0.1))" }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 370 120"
    fill="none"
  >
    <g transform="scale(-1,1) translate(-370,0)">
      {/* Bus body */}
      <rect
        x="30"
        y="40"
        rx="25"
        ry="25"
        width="300"
        height="50"
        fill="#e6f0f3"
        stroke="#46545C"
        strokeWidth="4"
      />
      <path
        d="M40 90 Q70 50 130 50 L330 50"
        stroke="#46545C"
        strokeWidth="4"
        fill="#dbe7ea"
      />
      <path
        d="M33 64 Q58 36 145 30 Q265 18 330 50"
        stroke="#46545C"
        strokeWidth="4"
        fill="none"
      />
      <rect
        x="160"
        y="58"
        width="32"
        height="32"
        rx="4"
        fill="#c2dadd"
        stroke="#46545C"
        strokeWidth="3"
      />
      <rect
        x="75"
        y="47"
        width="230"
        height="22"
        rx="8"
        fill="#7c929c"
        opacity="0.85"
      />
      {/* Window highlights */}
      <rect x="85" y="51" width="28" height="6" rx="2" fill="#b2bcc2" opacity="0.45" />
      <rect x="125" y="51" width="28" height="6" rx="2" fill="#b2bcc2" opacity="0.45" />
      <rect x="165" y="51" width="28" height="6" rx="2" fill="#b2bcc2" opacity="0.45" />
      <rect x="205" y="51" width="28" height="6" rx="2" fill="#b2bcc2" opacity="0.45" />
      <rect x="245" y="51" width="48" height="6" rx="2" fill="#b2bcc2" opacity="0.45" />

      <rect x="8" y="104" width="335" height="4" rx="2" fill="#46545C" opacity="0.28" />

      {/* Tires (static now, no animation) */}
      <g>
        <circle cx="70" cy="98" r="15" fill="#fff" stroke="#46545C" strokeWidth="5" />
        <circle cx="70" cy="98" r="7" fill="#b2bcc2" />
      </g>
      <g>
        <circle cx="140" cy="98" r="15" fill="#fff" stroke="#46545C" strokeWidth="5" />
        <circle cx="140" cy="98" r="7" fill="#b2bcc2" />
      </g>
      <g>
        <circle cx="260" cy="98" r="15" fill="#fff" stroke="#46545C" strokeWidth="5" />
        <circle cx="260" cy="98" r="7" fill="#b2bcc2" />
      </g>

      {/* Floating Dust (kept as is) */}
      <ellipse
        cx="80"
        cy="112"
        rx="12"
        ry="8"
        fill="rgba(100, 110, 120, 0.6)"
        style={{ animation: "dust-float-right 3s ease-out infinite", transformOrigin: "80px 112px" }}
      />
      <ellipse
        cx="155"
        cy="115"
        rx="10"
        ry="6"
        fill="rgba(90, 100, 110, 0.5)"
        style={{ animation: "dust-float-right 3s 1.2s ease-out infinite", transformOrigin: "155px 115px" }}
      />
      <ellipse
        cx="275"
        cy="112"
        rx="13"
        ry="7"
        fill="rgba(110, 120, 130, 0.55)"
        style={{ animation: "dust-float-right 3s 1.8s ease-out infinite", transformOrigin: "275px 112px" }}
      />
    </g>
  </svg>
);


export default Login;
