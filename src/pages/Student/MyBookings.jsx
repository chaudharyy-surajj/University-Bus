import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Card from '../../components/shared/Card';
import { bookings, schedules, routes } from '../../data/dummyData';

const MyBookings = () => {
  const getRouteInfo = (scheduleId) => {
    const schedule = schedules.find(s => s.id === scheduleId);
    const route = routes.find(r => r.id === schedule?.routeId);
    return { schedule, route };
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Bookings</h1>
        <p className="text-gray-600">View and manage your bus bookings</p>
      </div>

      <div className="space-y-4">
        {bookings.map((booking) => {
          const { schedule, route } = getRouteInfo(booking.scheduleId);
          return (
            <Card key={booking.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {booking.status.toUpperCase()}
                    </span>
                    <span className="text-lg font-semibold text-gray-900">Booking #{booking.id}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-gray-900">{route?.name}</p>
                        <p className="text-sm text-gray-600">{booking.pickupStop} → {booking.dropoffStop}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="font-medium text-gray-900">{schedule?.departureTime} - {schedule?.arrivalTime}</p>
                        <p className="text-sm text-gray-600">{new Date(booking.bookingDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-purple-500" />
                      <div>
                        <p className="font-medium text-gray-900">Seat {booking.seatNumber}</p>
                        <p className="text-sm text-gray-600">Fare: ${booking.fareAmount}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2">
                  {booking.status === 'confirmed' && (
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      View Ticket
                    </button>
                  )}
                  {booking.status === 'pending' && (
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default MyBookings;