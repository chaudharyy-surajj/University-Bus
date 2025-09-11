import React from "react";
import { Bus } from "lucide-react";

const Navbar = ({ currentRole, onRoleChange }) => {
  const roleButtons = [
    { role: "student", label: "Student", color: "bg-blue-600 hover:bg-blue-700" },
    { role: "driver", label: "Driver", color: "bg-green-600 hover:bg-green-700" },
    { role: "admin", label: "Admin", color: "bg-purple-600 hover:bg-purple-700" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Bus className="h-8 w-8 text-blue-600" />
          <h1 className="text-xl font-bold text-gray-900">University Bus System</h1>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600 mr-3">Switch Role:</span>
          {roleButtons.map(({ role, label, color }) => (
            <button
              key={role}
              onClick={() => onRoleChange(role)}
              className={`px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors ${
                currentRole === role
                  ? color.split(" ")[0] + " ring-2 ring-white ring-opacity-60"
                  : color
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
