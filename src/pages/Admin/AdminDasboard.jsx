import React from "react";
import {
  Bus,
  Users,
  Route,
  Clock,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import StatsCard from "../../components/shared/StatsCard";
import Card from "../../components/shared/Card";
import { buses, drivers, routes, schedules, bookings } from "../../data/dummyData";

const AdminDashboard = () => {
  const stats = {
    totalBuses: buses.length,
    activeBuses: buses.filter((b) => b.status === "active").length,
    totalDrivers: drivers.length,
    activeDrivers: drivers.filter((d) => d.status === "on-duty").length,
    totalRoutes: routes.length,
    activeRoutes: routes.filter((r) => r.isActive).length,
    todayBookings: bookings.length,
    revenue: bookings.reduce((sum, b) => sum + b.fareAmount, 0),
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600">University Bus Service Management Overview</p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Active Buses"
          value={`${stats.activeBuses}/${stats.totalBuses}`}
          icon={Bus}
          color="bg-blue-500"
          description="Operational vehicles"
        />
        <StatsCard
          title="Active Drivers"
          value={`${stats.activeDrivers}/${stats.totalDrivers}`}
          icon={Users}
          color="bg-green-500"
          description="On-duty drivers"
        />
        <StatsCard
          title="Routes"
          value={stats.activeRoutes}
          icon={Route}
          color="bg-purple-500"
          description="Active routes"
        />
        <StatsCard
          title="Today's Revenue"
          value={`$${stats.revenue.toFixed(2)}`}
          icon={TrendingUp}
          color="bg-orange-500"
          description="From bookings"
        />
      </div>

      {/* Fleet + Bookings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Bus Fleet Status</h3>
          <div className="space-y-3">
            {buses.map((bus) => (
              <div
                key={bus.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      bus.status === "active"
                        ? "bg-green-500"
                        : bus.status === "maintenance"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  ></div>
                  <div>
                    <p className="font-medium text-gray-900">{bus.number}</p>
                    <p className="text-sm text-gray-600">
                      {bus.route?.name || "Unassigned"}
                    </p>
                  </div>
                </div>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    bus.status === "active"
                      ? "bg-green-100 text-green-800"
                      : bus.status === "maintenance"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {bus.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Bookings</h3>
          <div className="space-y-3">
            {bookings.slice(0, 4).map((booking) => (
              <div
                key={booking.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900">Booking #{booking.id}</p>
                  <p className="text-sm text-gray-600">Seat {booking.seatNumber}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">${booking.fareAmount}</p>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-800"
                        : booking.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Alerts + Stats + Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Alerts</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <div>
                <p className="font-medium text-red-900">Bus UNI-003</p>
                <p className="text-sm text-red-600">Maintenance required</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
              <Clock className="h-5 w-5 text-yellow-600" />
              <div>
                <p className="font-medium text-yellow-900">Route 2</p>
                <p className="text-sm text-yellow-600">Behind schedule</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Statistics</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Total Trips</span>
              <span className="font-medium">24</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Passengers</span>
              <span className="font-medium">186</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Utilization</span>
              <span className="font-medium">78%</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Add New Bus
            </button>
            <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Create Schedule
            </button>
            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Generate Report
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
