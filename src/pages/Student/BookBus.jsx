import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import Card from '../../components/shared/Card';
import { routes, schedules } from '../../data/dummyData';

const BookBus = () => {
  const [selectedRoute, setSelectedRoute] = useState('');
  const [selectedDate, setSelectedDate] = useState('2024-12-19');
  const [pickupStop, setPickupStop] = useState('');
  const [dropoffStop, setDropoffStop] = useState('');

  const filteredSchedules = schedules.filter(s => 
    !selectedRoute || s.routeId === selectedRoute
  );

  const handleBooking = (scheduleId) => {
    alert(`Booking confirmed for schedule ${scheduleId}!`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Book Bus</h1>
        <p className="text-gray-600">Find and book your bus tickets</p>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Bus</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Route</label>
            <select
              value={selectedRoute}
              onChange={(e) => setSelectedRoute(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Routes</option>
              {routes.map((route) => (
                <option key={route.id} value={route.id}>{route.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Stop</label>
            <select
              value={pickupStop}
              onChange={(e) => setPickupStop(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Stop</option>
              <option value="Main Campus">Main Campus</option>
              <option value="North Campus">North Campus</option>
              <option value="South Campus">South Campus</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Dropoff Stop</label>
            <select
              value={dropoffStop}
              onChange={(e) => setDropoffStop(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Stop</option>
              <option value="Downtown Terminal">Downtown Terminal</option>
              <option value="City Center">City Center</option>
              <option value="Library Junction">Library Junction</option>
            </select>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Available Schedules</h3>
        {filteredSchedules.map((schedule) => {
          const route = routes.find(r => r.id === schedule.routeId);
          return (
            <Card key={schedule.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-gray-900">{route?.name}</p>
                        <p className="text-sm text-gray-600">{route?.distance} km • {route?.estimatedTime} min</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="font-medium text-gray-900">{schedule.departureTime} - {schedule.arrivalTime}</p>
                        <p className="text-sm text-gray-600">Departure - Arrival</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-purple-500" />
                      <div>
                        <p className="font-medium text-gray-900">{schedule.availableSeats} seats</p>
                        <p className="text-sm text-gray-600">available</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">$3.50</p>
                    <p className="text-sm text-gray-600">per seat</p>
                  </div>
                  <button
                    onClick={() => handleBooking(schedule.id)}
                    disabled={schedule.availableSeats === 0}
                    className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                      schedule.availableSeats === 0
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {schedule.availableSeats === 0 ? 'Full' : 'Book Now'}
                  </button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default BookBus;