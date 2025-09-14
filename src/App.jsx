import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout Components
import Navbar from './components/Layout/Navbar';
import DashboardLayout from './components/Layout/DashboardLayout';

// Student Pages
import StudentHome from './pages/Student/StudentHome';
import BookBus from './pages/Student/BookBus';
import MyBookings from './pages/Student/MyBookings';
import TrackBus from './pages/Student/TrackBus';
import StudentProfile from './pages/Student/StudentProfile';

// Driver Pages
import DriverDashboard from './pages/Driver/DriverDashboard';
import AssignedRoute from './pages/Driver/AssignedRoute';
import PassengerList from './pages/Driver/PassengerList';
import LiveLocation from './pages/Driver/LiveLocation';

// Admin Pages
import AdminDashboard from './pages/Admin/AdminDasboard';
import ManageBuses from './pages/Admin/ManageBuses';
import ManageRoutes from './pages/Admin/ManageRoutes';
import ManageSchedules from './pages/Admin/ManageSchedules';
import ManageDrivers from './pages/Admin/ManageDrivers';
import Reports from './pages/Admin/Reports';

// Login Page (you need to create this)
import Login from './pages/Login';

// ProtectedRoute wrapper for route protection
const ProtectedRoute = ({ isAuthenticated, children }) =>
  isAuthenticated ? children : <Navigate to="/login" replace />;

const App = () => {
  // ✅ Persist role in localStorage
  const [currentRole, setCurrentRole] = useState(
    localStorage.getItem('role') || 'student'
  );

  // ✅ Persist authentication in localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('auth') === 'true'
  );

  // 🔹 Keep localStorage in sync whenever state changes
  useEffect(() => {
    localStorage.setItem('auth', isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    localStorage.setItem('role', currentRole);
  }, [currentRole]);

  const handleRoleChange = (role) => {
    setCurrentRole(role);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('role');
    setIsAuthenticated(false);
    setCurrentRole('student'); // reset default role
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {isAuthenticated && (
          <Navbar
            currentRole={currentRole}
            onRoleChange={handleRoleChange}
            onLogout={handleLogout}
          />
        )}
        <Routes>
          {/* Public login route */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          {/* Redirect root based on authentication */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to={`/${currentRole}`} replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Student routes */}
          <Route
            path="/student/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <DashboardLayout role="student" />
              </ProtectedRoute>
            }
          >
            <Route index element={<StudentHome />} />
            <Route path="book-bus" element={<BookBus />} />
            <Route path="my-bookings" element={<MyBookings />} />
            <Route path="track-bus" element={<TrackBus />} />
            <Route path="profile" element={<StudentProfile />} />
          </Route>

          {/* Driver routes */}
          <Route
            path="/driver/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <DashboardLayout role="driver" />
              </ProtectedRoute>
            }
          >
            <Route index element={<DriverDashboard />} />
            <Route path="assigned-route" element={<AssignedRoute />} />
            <Route path="passenger-list" element={<PassengerList />} />
            <Route path="live-location" element={<LiveLocation />} />
          </Route>

          {/* Admin routes */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <DashboardLayout role="admin" />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="manage-buses" element={<ManageBuses />} />
            <Route path="manage-routes" element={<ManageRoutes />} />
            <Route path="manage-schedules" element={<ManageSchedules />} />
            <Route path="manage-drivers" element={<ManageDrivers />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
