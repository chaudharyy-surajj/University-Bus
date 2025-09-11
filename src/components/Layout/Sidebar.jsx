import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Calendar,
  MapPin,
  User,
  Bus,
  Users,
  Route,
  Clock,
  UserCheck,
  BarChart3,
  Bookmark,
} from "lucide-react";

const sidebarMenus = {
  student: [
    { path: "/student", icon: Home, label: "Home" },
    { path: "/student/book-bus", icon: Calendar, label: "Book Bus" },
    { path: "/student/my-bookings", icon: Bookmark, label: "My Bookings" },
    { path: "/student/track-bus", icon: MapPin, label: "Track Bus" },
    { path: "/student/profile", icon: User, label: "Profile" },
  ],
  driver: [
    { path: "/driver", icon: Home, label: "Dashboard" },
    { path: "/driver/assigned-route", icon: Route, label: "Assigned Route" },
    { path: "/driver/passenger-list", icon: Users, label: "Passenger List" },
    { path: "/driver/live-location", icon: MapPin, label: "Live Location" },
  ],
  admin: [
    { path: "/admin", icon: Home, label: "Dashboard" },
    { path: "/admin/manage-buses", icon: Bus, label: "Manage Buses" },
    { path: "/admin/manage-routes", icon: Route, label: "Manage Routes" },
    { path: "/admin/manage-schedules", icon: Clock, label: "Manage Schedules" },
    { path: "/admin/manage-drivers", icon: UserCheck, label: "Manage Drivers" },
    { path: "/admin/reports", icon: BarChart3, label: "Reports" },
  ],
};

const roleColors = {
  student: "bg-blue-600",
  driver: "bg-green-600",
  admin: "bg-purple-600",
};

const Sidebar = ({ role }) => {
  const location = useLocation();
  const menuItems = sidebarMenus[role];
  const bgColor = roleColors[role];

  return (
    <div className={`${bgColor} w-64 min-h-screen text-white`}>
      <div className="p-6">
        <h2 className="text-xl font-bold capitalize mb-8">{role} Dashboard</h2>
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-white bg-opacity-20 text-white"
                    : "text-white text-opacity-80 hover:bg-white hover:bg-opacity-10"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
