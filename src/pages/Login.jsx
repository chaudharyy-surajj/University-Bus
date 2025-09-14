import React, { useState, useEffect } from "react";

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
      input::placeholder {
        color: rgba(100, 100, 100, 0.6);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div style={styles.bg}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <BusLogo />
        <h2 style={styles.title}>ADTU Bus Services</h2>

        <label style={styles.label}>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const BusLogo = () => (
  <svg
    style={styles.bus}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 370 120"
    fill="none"
  >
    {/* Wrap whole bus in a group with horizontal flip */}
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
      <rect
        x="85"
        y="51"
        width="28"
        height="6"
        rx="2"
        fill="#b2bcc2"
        opacity="0.45"
      />
      <rect
        x="125"
        y="51"
        width="28"
        height="6"
        rx="2"
        fill="#b2bcc2"
        opacity="0.45"
      />
      <rect
        x="165"
        y="51"
        width="28"
        height="6"
        rx="2"
        fill="#b2bcc2"
        opacity="0.45"
      />
      <rect
        x="205"
        y="51"
        width="28"
        height="6"
        rx="2"
        fill="#b2bcc2"
        opacity="0.45"
      />
      <rect
        x="245"
        y="51"
        width="48"
        height="6"
        rx="2"
        fill="#b2bcc2"
        opacity="0.45"
      />

      <rect
        x="8"
        y="104"
        width="335"
        height="4"
        rx="2"
        fill="#46545C"
        opacity="0.28"
      />

      {/* Tires */}
      <g
        className="tire"
        style={{
          animation: "tire-rotate 1.6s linear infinite",
          transformOrigin: "70px 98px",
        }}
      >
        <circle
          cx="70"
          cy="98"
          r="15"
          fill="#fff"
          stroke="#46545C"
          strokeWidth="5"
        />
        <circle cx="70" cy="98" r="7" fill="#b2bcc2" />
      </g>
      <g
        className="tire"
        style={{
          animation: "tire-rotate 1.6s linear infinite",
          transformOrigin: "140px 98px",
        }}
      >
        <circle
          cx="140"
          cy="98"
          r="15"
          fill="#fff"
          stroke="#46545C"
          strokeWidth="5"
        />
        <circle cx="140" cy="98" r="7" fill="#b2bcc2" />
      </g>
      <g
        className="tire"
        style={{
          animation: "tire-rotate 1.6s linear infinite",
          transformOrigin: "260px 98px",
        }}
      >
        <circle
          cx="260"
          cy="98"
          r="15"
          fill="#fff"
          stroke="#46545C"
          strokeWidth="5"
        />
        <circle cx="260" cy="98" r="7" fill="#b2bcc2" />
      </g>

      {/* Darker Floating Dust on right side */}
      <ellipse
        className="dust"
        cx="80"
        cy="112"
        rx="12"
        ry="8"
        fill="rgba(100, 110, 120, 0.6)"
        style={{
          animation: "dust-float-right 3s ease-out infinite",
          transformOrigin: "80px 112px",
        }}
      />
      <ellipse
        className="dust"
        cx="155"
        cy="115"
        rx="10"
        ry="6"
        fill="rgba(90, 100, 110, 0.5)"
        style={{
          animation: "dust-float-right 3s 1.2s ease-out infinite",
          transformOrigin: "155px 115px",
        }}
      />
      <ellipse
        className="dust"
        cx="275"
        cy="112"
        rx="13"
        ry="7"
        fill="rgba(110, 120, 130, 0.55)"
        style={{
          animation: "dust-float-right 3s 1.8s ease-out infinite",
          transformOrigin: "275px 112px",
        }}
      />
    </g>
  </svg>
);

const styles = {
  bg: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #a7c7e7, #5a8dbd)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Poppins', sans-serif",
  },
  card: {
    background: "#edf2f7",
    padding: "2rem 2.5rem",
    borderRadius: "1.5rem",
    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    color: "#2c3e50",
    width: "350px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "2rem",
    margin: "1.5rem 0",
    fontWeight: "700",
    letterSpacing: "0.05rem",
    color: "#34495e",
  },
  label: {
    textAlign: "left",
    marginBottom: "0.5rem",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#34495e",
  },
  input: {
    width: "100%",
    padding: "0.8rem",
    marginBottom: "1.5rem",
    borderRadius: "0.5rem",
    border: "1px solid #bdc3c7",
    outline: "none",
    fontSize: "1rem",
  },
  button: {
    padding: "0.9rem",
    borderRadius: "1rem",
    border: "none",
    background: "linear-gradient(90deg, #2980b9, #6dd5fa, #2980b9)",
    color: "#fff",
    fontSize: "1.2rem",
    fontWeight: "700",
    cursor: "pointer",
    transition: "background-position 0.5s ease",
    backgroundSize: "200% 100%",
  },
  bus: {
    width: "220px",
    margin: "auto",
    filter: "drop-shadow(0 0 4px rgba(0, 0, 0, 0.1))",
  },
};

export default Login;
