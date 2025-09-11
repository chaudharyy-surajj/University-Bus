import React from 'react';
import { Bus, Users, MapPin, Clock } from 'lucide-react';
import StatsCard from '../../components/shared/StatsCard';
import Card from '../../components/shared/Card';
import { drivers, buses, schedules } from '../../data/dummyData';

const DriverDashboard = () => {
  const driver = drivers[0]; // Current driver
  const assignedBus = buses.find(b => b.id === driver.assignedBus);
  const todaySchedules = schedules.filter(s => s.driverId === driver.id);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome, {driver.name}!</h1>
        <p className="text-gray-600">Your driver dashboard for today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Assigned Bus"
          value={assignedBus?.number || 'N/A'}
          icon={Bus}
          color="bg-blue-500"
          description="Your vehicle"
        />
        <StatsCard
          title="Total Passengers"
          value="28"
          icon={Users}
          color="bg-green-500"
          description="Today"
        />
        <StatsCard
          title="Trips Completed"
          value="4"
          icon={MapPin}
          color="bg-purple-500"
          description="Out of 6 scheduled"
        />
        <StatsCard
          title="Next Departure"
          value="2:00 PM"
          icon={Clock}
          color="bg-orange-500"
          description="In 45 minutes"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Schedule</h3>
          <div className="space-y-3">
            {todaySchedules.map((schedule) => (
              <div key={schedule.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{schedule.departureTime} - {schedule.arrivalTime}</p>
                  <p className="text-sm text-gray-600">Route: {assignedBus?.route?.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{schedule.availableSeats} available</p>
                  <p className="text-xs text-gray-500">out of {assignedBus?.capacity}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Bus Information</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Bus Number</span>
              <span className="font-medium">{assignedBus?.number}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Capacity</span>
              <span className="font-medium">{assignedBus?.capacity} seats</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Route</span>
              <span className="font-medium">{assignedBus?.route?.name}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Status</span>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                assignedBus?.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {assignedBus?.status}
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DriverDashboard;