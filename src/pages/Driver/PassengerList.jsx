import React from 'react';
import { Users, User, MapPin } from 'lucide-react';
import Card from '../../components/shared/Card';
import { bookings, students, schedules, routes } from '../../data/dummyData';

const PassengerList = () => {
  // Mock current schedule passengers
  const currentSchedule = schedules[0];
  const currentRoute = routes.find(r => r.id === currentSchedule.routeId);
  const currentPassengers = bookings.filter(b => 
    b.scheduleId === currentSchedule.id && b.status === 'confirmed'
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Passenger List</h1>
        <p className="text-gray-600">Current trip passenger information</p>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{currentRoute?.name}</h3>
            <p className="text-sm text-gray-600">
              {currentSchedule.departureTime} - {currentSchedule.arrivalTime}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">{currentPassengers.length}</p>
            <p className="text-sm text-gray-600">Total Passengers</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <Users className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-xl font-bold text-blue-900">{currentPassengers.length}</p>
                <p className="text-sm text-blue-600">Boarded</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <User className="h-6 w-6 text-green-600" />
              <div>
                <p className="text-xl font-bold text-green-900">{currentSchedule.availableSeats}</p>
                <p className="text-sm text-green-600">Available Seats</p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6 text-purple-600" />
              <div>
                <p className="text-xl font-bold text-purple-900">4</p>
                <p className="text-sm text-purple-600">Stops Remaining</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Passenger Details</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Seat</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Student</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Pickup</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Dropoff</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentPassengers.map((booking) => {
                const student = students.find(s => s.id === booking.studentId);
                return (
                  <tr key={booking.id} className="border-b border-gray-100">
                    <td className="py-3 px-4">
                      <span className="font-medium text-gray-900">{booking.seatNumber}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium text-gray-900">{student?.name}</p>
                        <p className="text-sm text-gray-600">{student?.studentId}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm text-gray-600">{booking.pickupStop}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm text-gray-600">{booking.dropoffStop}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Boarded
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Stops</h3>
        <div className="space-y-3">
          {currentRoute?.stops.slice(1).map((stop, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  index === 0 ? 'bg-blue-500' : 'bg-gray-300'
                }`}></div>
                <span className="font-medium text-gray-900">{stop}</span>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">
                  {currentPassengers.filter(p => p.pickupStop === stop || p.dropoffStop === stop).length} passengers
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default PassengerList;