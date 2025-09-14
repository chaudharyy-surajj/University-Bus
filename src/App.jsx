// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import Navbar from './components/Layout/Navbar';
import DashboardLayout from './components/Layout/DashboardLayout';

// Student
import StudentHome from './pages/Student/StudentHome';
import BookBus from './pages/Student/BookBus';
import MyBookings from './pages/Student/MyBookings';
import TrackBus from './pages/Student/TrackBus';
import StudentProfile from './pages/Student/StudentProfile';

// Driver
import DriverDashboard from './pages/Driver/DriverDashboard';
import AssignedRoute from './pages/Driver/AssignedRoute';
import PassengerList from './pages/Driver/PassengerList';
import LiveLocation from './pages/Driver/LiveLocation';

// Admin
import AdminDashboard from './pages/Admin/AdminDasboard';
import ManageBuses from './pages/Admin/ManageBuses';
import ManageRoutes from './pages/Admin/ManageRoutes';
import ManageSchedules from './pages/Admin/ManageSchedules';
import ManageDrivers from './pages/Admin/ManageDrivers';
import Reports from './pages/Admin/Reports';

// Auth
import Login from './pages/Login';
import RequireAuth from './auth/RequireAuth.jsx';
import { useAuth } from './auth/AuthContext.jsx';

export default function App() {
  const { isAuthenticated, role, setRole, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {isAuthenticated && (
        <Navbar
          currentRole={role}
          onRoleChange={setRole}
          onLogout={logout}
        />
      )}

      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />

        {/* Root redirect */}
        <Route
          path="/"
          element={
            isAuthenticated
              ? <Navigate to={`/${role}`} replace />
              : <Navigate to="/login" replace />
          }
        />

        {/* Student */}
        <Route element={<RequireAuth />}>
          <Route path="/student/*" element={<DashboardLayout role="student" />}>
            <Route index element={<StudentHome />} />
            <Route path="book-bus" element={<BookBus />} />
            <Route path="my-bookings" element={<MyBookings />} />
            <Route path="track-bus" element={<TrackBus />} />
            <Route path="profile" element={<StudentProfile />} />
          </Route>
        </Route>

        {/* Driver */}
        <Route element={<RequireAuth />}>
          <Route path="/driver/*" element={<DashboardLayout role="driver" />}>
            <Route index element={<DriverDashboard />} />
            <Route path="assigned-route" element={<AssignedRoute />} />
            <Route path="passenger-list" element={<PassengerList />} />
            <Route path="live-location" element={<LiveLocation />} />
          </Route>
        </Route>

        {/* Admin */}
        <Route element={<RequireAuth />}>
          <Route path="/admin/*" element={<DashboardLayout role="admin" />}>
            <Route index element={<AdminDashboard />} />
            <Route path="manage-buses" element={<ManageBuses />} />
            <Route path="manage-routes" element={<ManageRoutes />} />
            <Route path="manage-schedules" element={<ManageSchedules />} />
            <Route path="manage-drivers" element={<ManageDrivers />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
