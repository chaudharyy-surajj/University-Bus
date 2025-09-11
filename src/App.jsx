import React, { useState } from 'react';
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

const App = () => {
  const [currentRole, setCurrentRole] = useState('student');

  const handleRoleChange = (role) => {
    setCurrentRole(role);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar currentRole={currentRole} onRoleChange={handleRoleChange} />
        
        <Routes>
          {/* Default route - redirect based on role */}
          <Route path="/" element={<Navigate to={`/${currentRole}`} replace />} />
          
          {/* Student Routes */}
          <Route
            path="/student/*"
            element={
              <DashboardLayout role="student">
                <Routes>
                  <Route path="/" element={<StudentHome />} />
                  <Route path="/book-bus" element={<BookBus />} />
                  <Route path="/my-bookings" element={<MyBookings />} />
                  <Route path="/track-bus" element={<TrackBus />} />
                  <Route path="/profile" element={<StudentProfile />} />
                </Routes>
              </DashboardLayout>
            }
          />
          
          {/* Driver Routes */}
          <Route
            path="/driver/*"
            element={
              <DashboardLayout role="driver">
                <Routes>
                  <Route path="/" element={<DriverDashboard />} />
                  <Route path="/assigned-route" element={<AssignedRoute />} />
                  <Route path="/passenger-list" element={<PassengerList />} />
                  <Route path="/live-location" element={<LiveLocation />} />
                </Routes>
              </DashboardLayout>
            }
          />
          
          {/* Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <DashboardLayout role="admin">
                <Routes>
                  <Route path="/" element={<AdminDashboard />} />
                  <Route path="/manage-buses" element={<ManageBuses />} />
                  <Route path="/manage-routes" element={<ManageRoutes />} />
                  <Route path="/manage-schedules" element={<ManageSchedules />} />
                  <Route path="/manage-drivers" element={<ManageDrivers />} />
                  <Route path="/reports" element={<Reports />} />
                </Routes>
              </DashboardLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;