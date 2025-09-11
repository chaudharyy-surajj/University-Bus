import React from 'react';
import { Bus, MapPin, Calendar, Clock } from 'lucide-react';
import StatsCard from '../../components/shared/StatsCard';
import Card from '../../components/shared/Card';
import { schedules, routes, bookings } from '../../data/dummyData';

const StudentHome = () => {
  const upcomingBookings = bookings.filter(b => b.status === 'confirmed');
  const todaySchedules = schedules.slice(0, 3);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome Back, Alice!</h1>
        <p className="text-gray-600">Here's your bus service overview for today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Active Bookings"
          value={upcomingBookings.length}
          icon={Calendar}
          color="bg-blue-500"
          description="Confirmed trips"
        />
        <StatsCard
          title="Routes Available"
          value={routes.length}
          icon={MapPin}
          color="bg-green-500"
          description="Active routes"
        />
        <StatsCard
          title="Next Departure"
          value="15 min"
          icon={Clock}
          color="bg-orange-500"
          description="Campus to Downtown"
        />
        <StatsCard
          title="Total Savings"
          value="$48.50"
          icon={Bus}
          color="bg-purple-500"
          description="This semester"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Departures</h3>
          <div className="space-y-3">
            {todaySchedules.map((schedule) => {
              const route = routes.find(r => r.id === schedule.routeId);
              return (
                <div key={schedule.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{route?.name}</p>
                    <p className="text-sm text-gray-600">{schedule.departureTime} - {schedule.arrivalTime}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-green-600">{schedule.availableSeats} seats</p>
                    <p className="text-xs text-gray-500">available</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Recent Bookings</h3>
          <div className="space-y-3">
            {bookings.map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Seat {booking.seatNumber}</p>
                  <p className="text-sm text-gray-600">{booking.pickupStop} → {booking.dropoffStop}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                    booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {booking.status}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">${booking.fareAmount}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StudentHome;